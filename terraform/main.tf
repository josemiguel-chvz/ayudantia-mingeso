terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws" # Indica el servicio del proveedor a utilizar
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "app-simple-aws" {
  ami           = "ami-830c94e3" # Imagen de la maquina virtual / depende de la región
  instance_type = "t2.micro" # Capacidad de la maquina virtual

  tags = {
    Name = "AppSimpleAwsEC2Instance"
  }
}