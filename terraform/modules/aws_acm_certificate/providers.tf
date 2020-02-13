provider "aws" {
  alias  = "acm"
  region = var.region
}

provider "aws" {
  alias  = "route53"
  region = var.region
}
