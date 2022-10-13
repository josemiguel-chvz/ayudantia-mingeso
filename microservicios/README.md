# Microservicios con Springboot

![Texto alternativo](https://github.com/josemiguel-chvz/ayudantia-mingeso/blob/develop/microservicios/microservicios.png)

# Dependencias

- Eureka server
    - Netflix Eureka Server

- Gateway
    - Eureka Client
    - Gateway

- Apps
    - Eureka Client
    - Dependen del tipo de microservicio



## Eureka Server (Discovery)

Se encarga de registrar y encontrar microservicios, de esta manera podran conectarse entre ellos

## Gateway

Proporciona un punto de entrada para la arquitectura de microservicios. Las peticiones se realizarán a traves de este y podra derivar la petición al microservicio encargado, realizando la función de balanceador de carga.

## Orquestación de microservicios

Para este ejemplo se realizará la orquestación de microservicios utilizando docker, para lo cual se requiere:
- Dockerfile para cada microservicio
- Crear imagenes y subirlas a docker hub

Una vez las imagenes se encuentren en la nube, se realiza la orquestación de microservicios usando la declaración de servicios de docker-compose

### Docker compose

```docker
services:
  eureka-service:
    container_name: eureka-service
    image: usuario/eureka-service:latest
    ports:
      - "8761:8761"
  gateway-service:
    container_name: gateway-service
    image: usuario/gateway-service:latest
    environment:
      - eureka.client.serviceUrl.defaultZone=http://eureka-service:8761/eureka/
    ports:
      - "8080:8080"
    depends_on:
      - eureka-service
    links:
      - eureka-service
  app-1-service:
    container_name: app-1-service
    image: usuario/app-1-service:latest
    ports:
      - "31231:8181"
    environment:
        - eureka.client.serviceUrl.defaultZone=http://eureka-service:8761/eureka/
    deploy:
        restart_policy:
          condition: on-failure
    depends_on:
      - eureka-service
    links:
      - eureka-service
```
