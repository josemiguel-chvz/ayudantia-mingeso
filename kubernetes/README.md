# Kubernetes

Video: https://drive.google.com/file/d/1h3z6TWB8rUN5cAEUjTrLiXMN4GUSE5I_/view?usp=share_link

## Instalación

**Requiere tener docker instalado y corriendo**

[Kubernetes Instalación]

#### Windows
Descargar .exe

Usando msi: https://storage.googleapis.com/minikube/releases/latest/minikube-installer.exe

Usando powershell
```
New-Item -Path 'c:\' -Name 'minikube' -ItemType Directory -Force
Invoke-WebRequest -OutFile 'c:\minikube\minikube.exe' -Uri 'https://github.com/kubernetes/minikube/releases/latest/download/minikube-windows-amd64.exe' -UseBasicParsing
```

Agregar minikube a PATH
```
$oldPath = [Environment]::GetEnvironmentVariable('Path', [EnvironmentVariableTarget]::Machine)
if ($oldPath.Split(';') -inotcontains 'C:\minikube'){ `
  [Environment]::SetEnvironmentVariable('Path', $('{0};C:\minikube' -f $oldPath), [EnvironmentVariableTarget]::Machine) `
}
```

#### Linux
Usando terminal
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

#### MACOS
Usando terminal
##### INTEL
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64
sudo install minikube-darwin-amd64 /usr/local/bin/minikube
```

##### M1
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64
sudo install minikube-darwin-arm64 /usr/local/bin/minikube
```

Una vez instalado se generará un contenedor docker corriendo la instancia de minikube

![alt text](img1.png "Title")


## Kubectl - Descarga
- Windows: https://kubernetes.io/docs/tasks/tools/install-kubectl-windows
- Mac: https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/
- Linux: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

Obtener pods
```
kubectl get pods
```

## Subir imagen a DockerHub

```
docker build -t usuario/app .
docker push usuario/app
```

## Despliegue de un Pod
Instanciar imagenes docker para ser ejecutada por un pod, pueden ser images de aplicaciones, base de datos, nginx, etc.
En este se define la imagen de los contenedores alojados en **docker hub** y su respectivas especificaciones como puerto, variables de entorno, volumenes.

```
kubectl apply -f app-deployment.yml
```

```
kubectl get deployments
```

## Servicio de un Pod
Permite acceder a las aplicaciones que se encuentran en un pod a traves de la asignación de una IP y DNS

```
kubectl apply -f app-service.yml
```

```
kubectl get services
```

## Levantar servicio
Generar una instancia HTTP y usando el protocolo TCP permite acceder a las aplicaciones de un Pod

```
minikube service app-service
```


[Kubernetes Instalación]:<https://minikube.sigs.k8s.io/docs/start/>
