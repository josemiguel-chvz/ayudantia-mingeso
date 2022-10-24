# React

## Requisitos:
-   [NPM] -> Gestor de paquetes JavaScript
-   [React Init] -> Inicializador de proyecto React
-   [Axios] -> Se encarga realizar peticiones HTTP al backend
-   [React bootstrap] -> Framework HTML/CSS
-   [React Router] -> Rutas

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
or
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
const Layout = ({child}) => {
    return (
        <>
            <Menu />
            <main>{child}</main>
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

### Paginas

```js
```

### Conexión a Backend usando Axios

```js

```


[React bootstrap]: <https://react-bootstrap.github.io/getting-started/introduction>
[NPM]: <https://www.npmjs.com/>
[Axios]: <https://axios-http.com/docs/intro>
[React Init]: <https://reactjs.org/docs/create-a-new-react-app.html>
[React Router]:<https://v5.reactrouter.com/web/guides/quick-start>


[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
