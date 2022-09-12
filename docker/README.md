# Docker
```
https://www.docker.com/
```

## Link ayudantía
```
https://drive.google.com/file/d/1NAxXrdx_g2XYvMTmCCPS83qhtSvm76N8/view?usp=sharing
```


## Crear un contenedor MYSQL

Para efectos de desarrollo, puede ser práctico utilizar un contenedor que ejecute una instancia de base de datos MYSQL.

### Crear volumen para persistencia de datos

En orden de tener persistencia en los datos registrados se debe crear un volumen local que será montado en el contenedor para mantener los datos registrados

#### Limpiar volumenes

```
docker volume prune
```

#### Crear volumen

```
docker volume create mysql-db-data
```
#### Ver volumenes

```
docker volume ls
```

#### Crear contenedor

Mysql ya cuenta con una imagen en docker hub
```
https://hub.docker.com/_/mysql
```

Por lo que basta con ejecutar docker run y montar el volumen para crear el contenedor 
[Docker - run]

```
docker run -d -p 33060:3306 --name mysql-db  -e MYSQL_ROOT_PASSWORD=123456 --mount src=mysql-db-data,dst=/var/lib/mysql mysql
```
- -p -> puerto_exterior:puerto_interior
- --name -> nombre contenedor
- -d -> ejecución en segundo plano
- -p -> puerto "exterior:interior"
- -e -> (environment)
- src -> volumen

#### Crear BD
Ingresar a consola MYSQL usando la ejecución de comandos en docker

```
docker exec -it <nombre_contenedor> <comando>
docker exec -it mysql-db mysql -p
```

- -it -> Específica que el comando a utilizar espera un input o interacción

```
create database <nombre_db>;
```

```
show databases;
```

### Ver contenedores

```
docker ps
```

### Ver imagenes

```
docker image ls
```

#### Crear imagen

```
docker build -t <nombre_usuario>/<nombre_repositorio> .
```

** Al construir la imagen esta usa la misma arquitectura que el host donde se creo la imagen, amazon linux requiere una arquitectura x86(amd64) por lo que puede ocurrir que necesiten cambiar la arquitectura **

```
docker buildx build --platform linux/amd64 -t <nombre_usuario>/<nombre_repositorio> .
```


#### Eliminar imagen
```
docker rmi <nombre_imagen>
```

### Eliminar contenedor

```
docker rm -f <nombre_contenedor>
docker rm -f mysql-db
```

## Crear contenedor de aplicación Spring Boot

Ejecutar aplicación
```
./mvnw spring-boot:run
```

### Crear dockerfile

Dockerfile debe estar dentro del directorio del proyecto spring

![Texto alternativo](https://github.com/josemiguel-chvz/ayudantia-mingeso/blob/develop/docker/images/image1.png)

Estructura
```docker
FROM adoptopenjdk:11-jre-hotspot
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
```

### Construir imagen

Dentro de la carpeta del proyecto generar .jar para construir imagen docker
```
./mvnw install -DskipTests
```

Crear imagen docker
```
docker build -t <nombre_usuario>/<nombre_repositorio> .
```

Subir imagen a [DockerHub]
```
docker push <nombre_usuario>/<nombre_repositorio>
```

## Orquestación de contenedores

En orden de poder conectar el contenedor de la aplicación con el contenedor MYSQL existen dos opciones, crear una red interna con docker o usar docker-compose para orquestar los contenedores compartiendo una misma red

Se debe generar un docker-compose.yml con la siguiente estructura
```docker
version: "3.8"
services:
  mysql-db: # Nombre de contenedor MYSQL
    image: mysql
    restart: always
    volumes:
      - ./data/db:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: <contraseña_root_mysql>
      MYSQL_DATABASE: <nombre_db>
    ports:
      - 33060:3306
  app: 
    container_name: <nombre_contenedor>
    image: <nombre_usuario>/<nombre_repositorio>
    ports:
      - "8080:8080"
    environment:
      - DB_URL=jdbc:mysql://mysql-db:3306/<nombre_db>?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true&useSSL=false
      - DB_USERNAME=root
      - DB_PASSWORD=123456
    deploy:
      restart_policy:
        condition: on-failure
    depends_on:
      - mysql-db
```

### Levantar contenedores

```
docker-compose up
```

Levantar en segundo plano
```
docker-compose up -d
```

### Terminar ejecución

```
docker-compose commit
docker-compose down
```

# Referecias
[Docker - run]
[Springboot - docker]

[Docker - run]:https://docs.docker.com/engine/reference/run/
[Springboot - docker]:https://spring.io/guides/gs/spring-boot-docker/
[DockerHub]:https://hub.docker.com/
