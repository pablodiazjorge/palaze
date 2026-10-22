![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Palaze

> **Legacy (TFG 2022-2023, mantenido hasta 2025).** Sin mantenimiento; el repositorio queda archivado y no admite issues ni pull requests. Limitaciones: `<a>` sin `href` usados como botón sin `aria-expanded` en el menú desplegable, botón hamburguesa sin nombre accesible en la barra lateral, y los tests son los que genera Stencil. Ver [Limitaciones](#limitaciones).

## Acerca de nuestra librería de componentes
Palaze ofrece una colección de componentes nativos que mejoran la funcionalidad y el diseño de tu sitio web.
Los componentes son fáciles de implementar, livianos y proporcionan una carga rápida que los convierte en una opción a tener en cuenta a la hora de elegir una librería.

---

Documentación: [palaze-web](https://palaze-pablodiazjorge.netlify.app/)

Fuente: [github.com/pablodiazjorge/palaze](https://github.com/pablodiazjorge/palaze)

## Empezando:

### Instalación local

Puedes empezar a utilizar la librería haciendo uso de los siguientes comandos para hacer una intalación en local:

```bash
npm i palaze
```

En el caso de querer versiones diferentes del paquete de producción, deberás especificar tu versión como se muestra a continuación:

```bash
npm i palaze@1.0.0
```

Una vez instalado el paquete, deberás añadir unas líneas de código en tu página para poder hacer uso de los componentes.

```html
<script type="module" src="/node_modules/palaze/dist/palaze/palaze.esm.js"></script>
```

Será trabajo del desarrollador que haga uso de la librería de ajustar las configuraciones para su proyecto en concreto.
En el caso del ejemplo, se almacena dentro del fichero "node_modules/palaze/". En esta ubicación se encontrará el paquete instalado.

### Instalación vía CDN

Este tipo de instalación es el más sencillo, ya que para poder disponer de la librería no se necesita hacer uso de ningún comando ni instalar nada, todo será online vía referencia al paquete.
A continuación se muestra un ejemplo de cómo instalar o implementar la librería vía CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/palaze/dist/palaze/palaze.esm.js"></script>
```

En el caso de querer versiones diferentes del paquete de producción, deberás especificar tu versión en la URL como se muestra a continuación:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/palaze@1.0.1/dist/palaze/palaze.esm.js"></script>
```

### Recomendación
Se recomienda encarecidamente consultar la documentación acerca del uso de los componentes en [palaze-web](https://palaze-pablodiazjorge.netlify.app/).

## Limitaciones

- **Menú desplegable poco accesible.** `plz-dropdown-menu` usa `<a>` sin `href` como botón en las variantes sin enlace (`src/components/plz-dropdown-menu/plz-dropdown-menu.tsx:63,75,132`). Esos elementos no reciben el foco del teclado, y los que despliegan el submenú no se pueden accionar con el teclado ni indican su estado con `aria-expanded`.
- **Botón de la barra lateral sin nombre accesible.** El botón que abre `plz-sidebar` solo muestra el carácter ☰ (`src/components/plz-sidebar/plz-sidebar.tsx:79`) y no tiene `aria-label`, así que un lector de pantalla no anuncia para qué sirve.
- **Tests generados.** Los 35 ficheros de test (los `*.spec.tsx` y `*.e2e.ts` de cada componente y `src/utils/utils.spec.ts`) son los que crea Stencil con el proyecto y con cada componente: comprueban que el componente se renderiza (y la función `format` de la plantilla), no su comportamiento.

## Partir del código
El repositorio está archivado, así que ya no admite issues ni pull requests. Si quieres partir del código, puedes clonarlo como se muestra a continuación:

```bash
git clone https://github.com/pablodiazjorge/palaze.git palaze-feature
cd palaze-feature
git remote rm origin
```

y ejecutar:

```bash
npm install
npm start
```

Para construir el proyecto para producción:

```bash
npm run build
```
---
### Disfrute de la librería palaze :blush:
