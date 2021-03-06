locals {
  s3_origin_id = "cloudfront-distribution-origin-${var.domain}.s3.amazonaws.com/"
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.static_website.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.static_website.arn]

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket" "static_website" {
  provider = aws
  acl      = "public-read"
  bucket   = var.domain

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = aws_s3_bucket.static_website.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

resource "aws_route53_zone" "route53_zone" {
  provider = aws
  name     = var.domain
}

module "acm_ops" {
  source       = "./modules/aws_acm_certificate"
  domain_names = [var.domain, var.subdomain]
  zone_id      = aws_route53_zone.route53_zone.zone_id
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {}

resource "aws_cloudfront_distribution" "cdn" {
  provider            = aws
  depends_on          = [aws_s3_bucket.static_website, module.acm_ops]
  enabled             = true
  default_root_object = "index.html"
  aliases             = [var.domain, var.subdomain]
  price_class         = "PriceClass_200"
  retain_on_delete    = true

  origin {
    domain_name = "${var.domain}.s3.amazonaws.com"
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    forwarded_values {
      query_string = true

      cookies {
        forward = "none"
      }
    }
  }

  viewer_certificate {
    acm_certificate_arn      = module.acm_ops.arn
    minimum_protocol_version = "TLSv1.1_2016"
    ssl_support_method       = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US"]
    }
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }
}

resource "aws_route53_record" "route53_to_cdn" {
  provider = aws
  zone_id  = aws_route53_zone.route53_zone.zone_id
  name     = var.domain
  type     = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "route53_sub_to_cdn" {
  provider = aws
  zone_id  = aws_route53_zone.route53_zone.zone_id
  name     = var.subdomain
  type     = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}
