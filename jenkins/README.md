# Jenkins

```
https://www.jenkins.io
```

## Instalación
```
https://www.jenkins.io/doc/book/installing/
```

## Pipeline
```
https://www.jenkins.io/doc/book/pipeline/getting-started/
```

### Repositorio ejemplo

```
https://github.com/josemiguel-chvz/spring-api-example
```


A partir de una aplicación spring se busca disponibilizar una imagen de docker a través de un pipeline de Jenkins.
El pipeline contiene 4 etapas:
- construir el archivo .jar
- realizar los testeos requeridos (para este ejemplo se realizaran tests unitarios en JUnit, pueden ser sonarqube, jmeter, selenium, owasp zap)
- construir la imagen docker
- subir imagen docker a [Docker Hub]

![Texto alternativo](https://github.com/josemiguel-chvz/ayudantia-mingeso/blob/develop/jenkins/jenkins.png)


[Docker Hub]:https://hub.docker.com/



