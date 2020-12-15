terraform {
  backend "s3" {
    key = "justin-livi"
  }

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 2.48"
    }
  }
  
  required_version = ">= 0.13"
}
