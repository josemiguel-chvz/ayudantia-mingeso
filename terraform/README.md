# Terraform 
```
https://www.terraform.io/
```
Terraform es una herramienta IaC (Infraestructure as Code)

Se utiliza para definir y aprovisionar la infraestructura completa utilizando un lenguaje declarativo (.tf).

## Instalar terraform

https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/aws-get-started

### Comprobar instalación
```
terraform -v
```
## Configurar credenciales en AWS
Para aprovisionar una infraestructura, se utilizará Amazon Web Services como proveedor, 
AWS dispone de distintos recursos como maquinas virtuales (EC2), redis, bases de datos entre otros.

```
https://aws.amazon.com/
```

Para poder crear estos recursos usando terraform es necesario generar un usuario que permita la creación del recurso, esto se debe realizar en IAM (Identity and Access Management)

![Texto alternativo](https://github.com/josemiguel-chvz/ayudantia-mingeso/blob/develop/terraform/images/1.png)

### Creación de usuario

Dentro de IAM se debe crear un nuevo usuario, es importante que tenga los permisos necesarios para acceder al recurso que se quiere crear

![Texto alternativo](https://github.com/josemiguel-chvz/ayudantia-mingeso/blob/develop/terraform/images/2.png)

![Texto alternativo](https://github.com/josemiguel-chvz/ayudantia-mingeso/blob/develop/terraform/images/3.png)

En este caso se creará una instancia de EC2, por lo que se selecciona el permiso de todo acceso a este recurso
```
AmazonEC2FullAccess
```

Una vez creado el usuario se debe guardar las crendeciales, existe la opción de descargar un archivo .csv.
![Texto alternativo](https://github.com/josemiguel-chvz/ayudantia-mingeso/blob/develop/terraform/images/4.png)

Es importante guardar el Access Key ID y Secret Access Key ya que son necesarios para permitir que terraform pueda conectar con AWS a tráves del usuario creado y de esta manera crear el recurso solicitado.

Estas clave se deben definir cono variables de entorno a utilizar en una sesión de terminal

```
export AWS_ACCESS_KEY_ID=<aws_access_key_id>
export AWS_SECRET_ACCESS_KEY=<aws_secret_access_key>
```

con echo se puede comprobar que las variables fueron guardadas en la sesión de terminal

```
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```

## Crear configuración

En una carpeta nueva se debe crear un archivo main.tf
en este se debe definir la configuración de la infraestructura a crear y el proveedor a utilizar

### Glosario

- **required providers** -> Indicar el proveedor al cual se le quiere aprovisionar una infraestructura
- **required version** -> versión de terraform
- **region** -> region de servidor AWS
- **resource** -> recurso a crear en AWS
- **ami** -> Identificador de la maquina virtual, asociados a la region *
- **instance_type** -> define la capacidad de la maquina virtual EC2
- **tags** -> definir etiquetas relacionadas al recurso, en este caso el nombre de la instancia


* Catalogo AMI
```
https://us-west-2.console.aws.amazon.com/ec2/home?region=us-west-2#AMICatalog
```

### Comandos terraform

**terraform init** -> Inicializar carpeta donde se alojará la configuración de la infraestructura

###### (main.tf con la configuración es necesario antes de inicializar)

**terraform fmt** -> formatear archivos .tf para ser leidos por terraform

**terraform validate** -> validar configuración a subir

**terraform plan** -> revisar configuración de infraestructura a subir en proveedor

**terraform apply** -> aplicar configuración

**terraform show** -> mostrar estado

##### (en el comando apply y plan se realiza la conexión a AWS con las credenciales que se exportaron anteriormente)

#### Links
[Terraform AWS]

[Terraform AWS]:https://learn.hashicorp.com/tutorials/terraform/aws-build?in=terraform/aws-get-started
