# React

## Requisitos:
-   [NPM] 14+ -> Gestor de paquetes JavaScript
-   [React Init] -> Inicializador de proyecto React
-   [Axios] -> Se encarga de realizar peticiones HTTP al backend
-   [React bootstrap] -> Framework HTML/CSS
-   [React Router] -> Enrutamiento de paginas

## Inicializar un proyecto

Para inicializar un proyecto en react deben tener instalado NPM, una vez instalado en el directorio elegido realizar

```
npx create-react-app app-frontend
cd app-frontend
npm start # Inicializar aplicación React
```
* _NPX es un gestor de paquetes de NPM._

### Instalar librerias
_[React Router], [React Bootstrap], [Axios]_
```
npm install <libreria>
```
o
```
yarn add <libreria>
```

## Rutas, componentes y paginas

### Activar enrutamiento en aplicación React

Definir Aplicación (**index.js**) con rutas navegables, de esta manera nuestra aplicación en React podra utilizar rutas de acceso a las paginas que se definan.
```js
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
```

```html
<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>
```

### Componentes

La aplicación contará con un menu de navegación para poder navegar por nuestra aplicación, esta se definirá como componente.

**components/Menu.js**

### Layout

El layout definirá la estructura de nuestra aplicación, es decir elementos que serán visibles junto al contenido de las páginas. En este caso se agregará un menu de navegación el cual será visible en todo momento reemplazando la estructura por default de React.

En el archivo **Layout.js** se debe importar el menu y definir el main (_contenido a mostrar_) como como hijos, los cuales serán las paginas enrutadas de nuestra aplicación.

```js
import Menu from "../components/Menu";
const Layout = ({children}) => {
    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    );
};
export default Layout;
```
### Rutas

Para definir las rutas es necesario modificar el **App.js** para que actue como un aplicación con rutas y no como un aplicación de una página.

Para esto es necesario utilizar **React Router** y el **Layout** previamente definido.

```js
...
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Index";
import Employee from "./pages/Employee";

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Index />} exact />
          <Route path="/Page" element={<Page />} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
```

### Conexión a Backend usando Axios

UseEffect -> Se encarga de ejecutar código (variables, funciones) al momento de renderizar una pagina.

UseState -> Variables de estado, estas variables son definidas con un valor inicial y su estado puede ir cambiando al momento de renderizar la página o cuando se genera algún evento al interacturar con la página.


#### **GET REQUEST**
```js
import { useEffect, useState } from "react";
import axios from 'axios';
...
....
const [items, setItems] = useState([]);
const getItems = async () => {
    try {
        let url = 'http://localhost:8080/items/all';
        let response = await axios.get(url);
        if (response.status === 200) {
            setItems(response.data);
        }
    } catch (error) {
        console.log(error.message);
    }
};

useEffect(() => {
    getItems();
}, []);
...
```

### Crear contenedor para aplicación React

En orden de utilizar nuestra aplicación React como un contenedor debemos definir el **Dockerfile** en la raiz de nuestro proyecto

```Docker
# Node Alpine version -> light version
FROM node:16-alpine
WORKDIR /app

# Copiar paquete de dependencias
COPY package*.json ./
# Instalar dependencias
RUN npm install
RUN npm install -g serve

# Copiar archivos del proyecto a directorio /app en contenedor
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Para evitar copiar node_modules y generar una imagen de tamaño muy grande se utiliza **.dockerignore**

```Docker
node_modules
build
```

[React bootstrap]: <https://react-bootstrap.github.io/getting-started/introduction>
[NPM]: <https://www.npmjs.com/>
[Axios]: <https://axios-http.com/docs/intro>
[React Init]: <https://reactjs.org/docs/create-a-new-react-app.html>
[React Router]:<https://v5.reactrouter.com/web/guides/quick-start>
