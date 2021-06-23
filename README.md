# RIMAC HACKING CHELLENGE

  &ensp;&ensp;Esta aplicación esta realizada mediante la librería de ReactJs, haciendo uso del ambiente de npx create-react-app para lograr todos los objetivos en el tiempo proporcionado, cuenta con pocas dependencias más que las necesarias para su desarrollo. Se utilizó el preprocesador de Sass para manejar los estilos, para la validación de campos se implementó Yup y el manejo del global storage se hizo mediante Context API; además, se configuró EsLint con varias extensiones tomando en consideración las recomendadas por Airbnb para tener un código limpio y organizado.

  [GitHub](https://github.com/pretorium/rimac-challenge) [Deployed](https://rimac-challenge-rc.netlify.app/)

# Iniciar proyecto 🚀

&ensp;&ensp;*Si es primera vez que inicias el proyecto es necesario ejecutar el siguiente comando*
```
npm install
```

&ensp;&ensp;*Si no, unicamente*
```
 npm start
```
&ensp;&ensp;*y el proyecto se abrirá en el http://localhost:3000/*

# Estructura del proyecto 📂

> /src <br/>
### &ensp;&ensp;1. Assets
&ensp;&ensp;Contiene todos los recursos de la aplicación, como las imágenes y las fuentes.
>  &ensp;&ensp;1.&ensp;/assets<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/images<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/fonts

### &ensp;&ensp;2. Componentes
&ensp;&ensp;Alberga todos los pequeños componentes que se pueden reutilizar en diversas vistas, contiene un documento para la lógica y otro de estilo.
>  &ensp;&ensp;2.&ensp;/components<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/ExampleComponent<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/index.jsx<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/styles.scss

### &ensp;&ensp;3. Module 

&ensp;&ensp;La carpeta *module* es la parte principal de la aplicación, en ella se encuentran las vistas y las rutas a las mismas, cada vista o página contiene su documento de lógica y de estilo, así mismo si la pagina contiene sub rutas.
>  &ensp;&ensp;3.&ensp;/module<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/pages<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/ExamplePageOne<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/index.jsx<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/styles.scss<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/index.jsx<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/routes.js<br/>

### &ensp;&ensp;4. Providers
&ensp;&ensp;Engloba la lógica de los providers que proporcionan la data global a toda la aplicación, a través del uso de createContext de React y el hook de useReducer.
>  &ensp;&ensp;4.&ensp;/providers<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/ExampleProviderOne<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/actions.js<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/provider.jsx<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/reducer.js<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/index.jsx<br/>

### &ensp;&ensp;5. Services 
&ensp;&ensp;Esta carpeta contiene todos los Custom Hooks que están relacionados con las peticiones al servidor, de esa manera se acorta el código implementado para realizar peticiones en cada una de las vistas que requiera de data externa.
>  &ensp;&ensp;5.&ensp;/services<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/useExampleFetch.jsx<br/>

### &ensp;&ensp;6. Shared  
&ensp;&ensp;La carpeta *shared* alberga todos los componentes compartidos, que son armados incluso con otros pequeños componentes, un ejemplo de componente compartido es el Header que se repite en todas las vistas.
>  &ensp;&ensp;6.&ensp;/shared<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/SharedComponentExample<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/index.jsx<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/styles.scss

### &ensp;&ensp;7. Styles 
&ensp;&ensp;Contiene todos los estilos globales de la aplicación, como las variables de colores, mixins, fuentes y otros documentos para hacer reset de los estilos por defecto que trae cada estiqueta de HTML.
>  &ensp;&ensp;7.&ensp;/styles<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/global<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/exampleStyleOne.scss<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/exampleStyleTwo.scss<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/index.scss<br/>

### &ensp;&ensp;8. Utils 
&ensp;&ensp;*Utils* es una carpeta que contiene y puede contener diversos documentos donde se desarrollan funciones generales que son reutilizadas en diversas vistas, en caso que se requieran, para evitar repetir código.
>  &ensp;&ensp;8.&ensp;/utils<br/>
>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;/sampleFunctions.js<br/>

# RouterOutlet y ListenerProvider 💡

## RouterOutlet
&ensp;&ensp;El *RouterOutlet* es un componente de renderizado condicional, este recibe las props que normalmente recibe Route de react-router-dom y otras que se definan para manejar las condicionales, en este caso se usó una prop llamada isProtect para las rutas a las que no se pueden acceder si no se está autenticado. 

## ListenerProvider
&ensp;&ensp;El componente *ListenerProvider* es un HOC (higher-order component) que comparte una misma lógica para todas las rutas, se encarga de escuchar el cambio del provider Auth y actualizar las cookies, de es manera evitamos tener que actualizar las cookies y el provider en diferentes tiempos.  

