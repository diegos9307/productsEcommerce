# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Solucionando Preguntas establecidas

### 1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

Las principales ceremonias son las siguientes:

- Spring Planning.
- Daily Meetings
- Spring Review
- Retrospectiva

#### Spring Planning

Es cuando los integrantes del equipo deben ponerse de acuerdo sobre el trabajo a realizar en el tiempo establecido del spring, priorizando de acuerdo con las metas establecidas para el spring.

#### Daily Meetings

Es una reunión corta a primera hora de la jornada, no debe durar más de 15min. Usualmente los miembros del equipo están de pie en estas reuniones, para la ésta no tarde más de lo necesario. El objetivo de esta reunión es informar de manera rápida que hizo el día anterior, si se cumplió con las metas establecidas o si puede estar teniendo dificultades y se planeado las metas para el día.

#### Spring Review

Éste se hace al final de cada spring y se mira lo que se ha completado durante el spring entregado. Es un espacio fundamental para la retroalimentación, ver que se puede mejorar e implementar en un próximo spring.

#### Retrospectiva

Tiene lugar al final de cada spring. Se revisa la forma de trabajo del equipo durante el spring que acaba de finalizar. Los miembros del equipo se dan feedback entre sí, e intentan conjuntamente pensar en soluciones para solucionar los posibles obstáculos que se pudieron tener.

### 2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

Un Wireframe es una representación visual de forma esquemática inicial de la estructura de un sitio web.
Figma, es una de las principales herramientas del prototipado web.

### 3. Explicar la diferencia entre `var`, `let` y `const`. Y dar un ejemplo en qué caso se utilizará.

La declaración con `var` define una variable en el ámbito global, mientras que `const` y `let` reducen el ámbito de la variable a bloques y estás no admiten hosting. Adicionalmente las variables definidas con `const` no pueden ser reasignadas.

### 4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada `rama-1`?

- git branch `rama-1`
- git checkout - b `rama-1`
- git checkout -b `rama-1` <commit_sha>

### 5. Explicar la diferencia entre git merge y git rebase.

Al hacer git merge se mantiene a salvo el historial de la rama secundaria, ya que crea un nuevo commit que une ambas ramas sin eliminarlas. El rebase al ser aplicado no mantiene a salvo la historia de la rama secundaria, sino que reescribe la historia de la rama principal integrando los commits de la rama secundaria en la principal sin crear un commit adicional.

### 6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando `git pull`?

En el Pull Request lo que se hace es una petición de aprobación ( en el repositorio remoto ) luego de unos cambios locales y si estos son aceptados luego hacer un merge a la rama principal ( remota ), mientras que el git pull lo que hace es una actualización del repositorio local con respecto al remoto.

### 7. ¿Qué es el Virtual DOM?

Es un modelo o representación gráfica del documento de nuestra aplicación web creado por el navegador, sobre el cual éste aplica los cambios necesarios en cada actualización de estado o evento. El DOM posee una estructura de diagrama de árbol, al cambiar algún elemento o nodo todos sus elementos o nodos hijos serán renderizados nuevamente, hayan sido modificados o no.

### 9. Hooks (useEffect, useState) para qué se utilizan y cómo funcionan

- #### useState

  Es una función que crea internamente una variable donde podremos almacenar el estado de un componente. Acepta un valor inicial para esa variable y un array con dos elementos, el valor de la variable y la función para podificarla. Se pueden usar para cambiar el estado de un compenente funcional dependiendo de cierto comportamiento dado, por ejm que al dar click a un boton haga cierta funcionalidad.

- #### useEffect

La llamada a useEffect acepta una función como argumento. Está función se ejecuta por defecto cuando el componente se renderiza por primera vez y después cada vez que el componente se actualice. También es posible especificar cuándo se debe ejecutar esta función con un segundo argumento opcional que le podemos pasar.
Sus usos mas comunes son: para la inicialización de variables, llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM.

### 10. ¿Cuales son los Ciclo de vida de los componentes?

- ##### ComponentDidMount
- ##### ComponentDidUpdate
- ##### ComponentWillUnmount

### 11. ¿Cómo compartir estado entre componentes?

La comunicación entre componentes inicialmente solo se da de padres a hijos y principal manera de compartir estados a cualquier propiedad es por medio de las props. Para solucionar esto se crea context o redux que es su defecto internamente usa context, para pasar datos a través del árbol de componentes.

### 12. ¿Qué formas existen de organizar archivos en un proyecto ?

- Group files by feature
- Group files by type
- Class name is file name
- Feature name is folder name and prefix of file names

### 13. ¿Diferencia entre componentes y vistas?

Las vistas son componentes de react pero con la ayuda de react-router estos componentes pueden cambiar mi url y renderizar los componentes tratados como paginas
