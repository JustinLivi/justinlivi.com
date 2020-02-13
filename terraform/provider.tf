provider "aws" {
  version    = "~> 2.48"
  region     = var.region
  access_key = var.aws_access_key_id
  secret_key = var.aws_secret_access_key
}
