Infraestructure as code

Terraform
Se utiliza para definir y aprovisionar la infraestructura completa utilizando un lenguaje declarativo (.tf)

Instalar terraform

https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started

Comprobar instalación
terraform -v

configurar credenciales en aws

https://us-east-1.console.aws.amazon.com/iam/

Permisos:
AmazonEC2FullAccess

Obtener access key id y secret access key

export AWS_ACCESS_KEY_ID=<aws_access_key_id>
export AWS_SECRET_ACCESS_KEY=<aws_secret_access_key>

Catalogo AMI
https://us-west-2.console.aws.amazon.com/ec2/home?region=us-west-2#AMICatalog:


crear archivo terraform

mkdir <nombre_directorio>
cd <nombre_directorio>


touch <nombre_archivo>.tf
touch main.tf

required provides -> indicar el  proveedor al cual se le quieren crear recursos y/o infraestructura

required version -> version de terraform

region -> region del proveedor

resource -> recurso a crear

ami -> Identificador tipo de maquina virtual, asociados a la region (amazon linux)

instance_type -> tipo de instance, define la capacidad de la maquina virtual EC2 (free)

tags -> definir etiquetas relacionadas al recurso

terraform init

terraform fmt -> format archivos .tf

terraform validate -> validar configuración

terraform plan -> revisar configuración a subir en proveedor

terraform apply -> aplicar configuración

terraform show -> mostrar estado
