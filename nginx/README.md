# Nginx

## Documentación oficial

Ayudantía
```
https://drive.google.com/file/d/1hoFBppuePqDorbNHs8HIgfeXH-o8wBTy/view?usp=sharing
```

```
https://nginx.org/en/docs/
```

```
https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/
```

## Nginx y Docker Compose

Nginx se agregará al docker compose como servidor proxy, para esto tendremos una aplicación springboot subida a docker hub la cual se ejecuta en el puerto **8080** (http://localhost:8080/), de esta manera nginx redireccionará las peticiones que se hagan a nuestra aplicación hacia el puerto **80** (HTTP) permitiendo interactuar con nuestra aplicación directamente a traves de la dirección IP la cual corresponde a **http://localhost/** en nuestro Local, para el servidor virtual deben buscar su dirección ip dentro de la configuración de su maquina virtual.


### Archivo de configuración Nginx

**nombre_app.conf**

```
server {
    listen 80;
    charset utf-8;
    access_log off;

    location / {
        proxy_pass http://<nombre_app>:8080;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /static {
        access_log   off;
        expires      30d;

        alias /app/static;
    }
}
```

- proxy_pass: Indicamos que todas las peticiones serán gestionadas por nuestro servidor nginx
- proxy_set_header: Con esta directiva podemos establecer diferentes cabeceras con información del proxy.

Es importante que el archivo de configuración se encuentre dentro de la siguiente ruta
```
/nginx/conf.d/nombre_app.conf
```

### Configuración docker-compose
La imagen de nginx es la oficial de docker por lo que basta con indicarla, también es necesario indicar la ruta del archivo de configuración .conf y el puerto de nginx, en este caso el puerto **80**

```
version: "3.8"
services:
  nginx:
    container_name: nginx-proxy
    image: nginx
    restart: always
    ports:
      - "80:80"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
    depends_on:
      - app
  app:
    container_name: app
    image: usuario/app
    ports:
      - "8080:8080"
    environment:
      - DB_URL=jdbc:mysql://mysql-db:3306/bd?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true&useSSL=false
      - DB_USERNAME=root
      - DB_PASSWORD=password
    deploy:
      restart_policy:
        condition: on-failure
    depends_on:
      - mysql-db
```

### Levantar docker-compose
```
docker-compose up
```