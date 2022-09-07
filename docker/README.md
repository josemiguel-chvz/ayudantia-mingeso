# Docker
```
https://www.docker.com/
```

## Crear un contenedor

Para efectos de desarrollo, puede ser práctico utilizar un contenedor que ejecute una instancia de base de datos.

### MYSQL

Mysql ya cuenta con una imagen en docker hub
```
https://hub.docker.com/_/mysql
```

Por lo que basta con ejecutar la imagen para crear el contenedor

```
docker run -d -p 33060:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=123456 mysql
```
-p -> puerto_exterior:puerto_interior
--name -> nombre contenedor
-d -> se ejecuta en segundo plano
-p -> puerto "exterior:interior"
-e -> (environment)

### Crear BD
Ingresar a consola MYSQL

```
docker exec -it <nombre_contenedor>
docker exec -it mysql-db mysql -p
```

```
create database <nombre_db>;
```

## Crear contenedor de aplicación Spring Boot

Ejecutar aplicación
./mvnw spring-boot:run

## Terminar ejecución de un contenedor
```
docker rm -f  <nombre_contenedor>
```
# Referecias
https://docs.docker.com/engine/reference/run/
