# Documentación: Tienda de ropa
Esta es una aplicación web en Node.js utilizando Express con mongoose para crear una tienda de ropa con un catálogo de productos y un dashboard para el administrador. Los productos incluidos en el catálogo se guardan en una base de datos de mongo en Atlas.

## Índice

  - [Estructura de archivos](#estructura-de-archivos)
  - [Descripción de los archivos](#descripción-de-los-archivos)
    - [Carpeta src](#carpeta-src) 
    - [Carpeta test](#carpeta-test) 
    - [Carpeta public](#carpeta-public) 
  - [Funciones](#funciones)
    - [Funciones del controlador de productos](#funciones-del-controlador-de-productos)
    - [Funciones del controlador de autenticación](#funciones-del-controlador-de-autenticación)
    - [Funciones auxiliares](#funciones-auxiliares)
  - [Endpoints](#endpoints)
    - [Cualquier visitante](#cualquier-visitante)
    - [Tienda: usuarios sin identificar o identificados con perfil estándar](#tienda-usuarios-sin-identificar-o-identificados-con-perfil-estándar)
    - [Tienda: usuarios idetificados con perfil de administrador](#tienda-usuarios-identificados-con-perfil-de-administrador)
    - [Tienda: identificación de usuario](#tienda-identificación-de-usuario)
    - [API](#api)
  - [Funcionamiento de la aplicación](#funcionamiento-de-la-aplicación)


## Estructura de archivos

La aplicación 'Tienda de ropa' posee la siguiente estructura de archivos: 

```
.
├── src
│   ├── config
│   │   ├── db.js
│   │   ├── session.js
│   │   └── firebase.js (BONUS) 
│   ├── controllers
│   │   ├── authController.js (BONUS)
│   │   └── productController.js
│   ├── docs (BONUS)
│   │   ├── basicInfo.js
│   │   ├── components.js
│   │   ├── index.js
│   │   └── products.js
│   ├── middlewares (BONUS)
│   │   └── authMiddleware.js
│   ├── models
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes
│   │   ├── authRoutes.js (BONUS)
│   │   ├── dashboardRoutes.js
│   │   ├── index.js
│   │   └── productRoutes.js
│   ├── utils
│   │   ├── helperFunctions.js
│   │   └── htmlTemplates.js
│   └── index.js
├── test (BONUS)
│   └── productController.test.js
├── public
│   ├── styles.css
│   └── img
├── .env
├── package.json
└── README.md (este documento)

```

## Descripción de los archivos

### Carpeta src

Carpeta principal del proyecto. Cada archivo incluido en las subcarpetas contiene la lógica necesaria para realizar las siguientes funciones:

#### Carpeta config
- `config/db.js`: establece la conexion a la base de datos MongoDB mediante Mongoose. Utiliza la dependencia `dotenv` para acceder al archivo `.env` y leer la `MONGO_URI`.

- `config/firebase.js`: contiene la configuración y conexión de firebase.

- `config/session.js`: utiliza los módulos `crypto` y `bcrypt` para generar y encriptar una clave secreta aleatoria para el secreto de la sesión.

#### Carpeta controllers
- `controllers/authController.js`: contiene un controlador con funciones para generar los formularios de registro e inicio de sesión para los usuarios y funciones para realizar el registro (como administrador o usuario), inicio de sesión y cierre de sesión de los usuarios utilizando Firebase Authentication. Incluye el emulador de Firebase Authentication para realizar pruebas a nivel local. Utiliza el modelo `User` para identificar y asignar un rol a cada usuario.

- `controllers/productController.js`: contiene un controlador con funciones que generan los formularios para incluir o moficar un producto, filtrar productos por categoría y responder a solicitudes CRUD (Crear, Leer, Actualizar, Eliminar). Utiliza el modelo `Product` para manejar los productos en la base de datos y devuelve las respuestas en formato HTML o JSON dependiendo de si en la URL encuentra la palabra "shop" o "api" respectivamente.

#### Carpeta docs
- `docs/basicInfo.js`: contiene la especificación OpenAPI para la API de la tienda, utiliza para documentar dicha API con Swagger.

- `docs/components.js`: contiene los esquemas para generar la documentación de la API con Swagger. 

- `docs/index.js`: archivo donde se importa y centraliza la información generada en los demás archivos de la carpeta y desde donde se exportará como un conjunto al index principal de la aplicación.

- `docs/products.js`: documenta cada endpoint de la aplicación.

#### Carpeta middleware
- `middlewares/authMiddlewares.js`: contiene el middleware para comprobar si el usuario está autenticado utilizando Firebase Authentication y `express-session`. Protege las rutas que solo puede manejar un usuario de tipo administrador. Comprueba que el usuario haya iniciado sesión y que su cuenta sea de tipo "admin".

#### Carpeta models
- `models/Product.js`: define el esquema del producto utilizando Mongoose.

- `models/User.js`: defien el esquema del usuario utilizando Mongoose.

#### Carpeta routes
- `routes/authRoutes.js`: contiene las rutas de autenticación de usuario en sesión. La funcionalidad de cada ruta se define mediante las funciones incluidas en el controlador de `authController.js`.

- `routes/dashboardRoutes.js`: contiene las rutas relacionadas con los productos de la tienda que son accesibles solo para los usuarios con perfil de administrador. La funcionalidad de cada ruta se define mediante las funciones del controlador `productController.js`.

- `routes/index.js`: importa todas las rutas definidas en el resto de archivos de la carpeta y protege las rutas importadas desde `dashboardRoutes.js` con el middleware de `authMiddleware.js`. Desde aquí se importan todas las rutas al archivo principal de la aplicación.

- `routes/productRoutes.js`: contiene las rutas relacionadas con los productos de la tienda que son accesibles tanto para visitantes sin registrar como para usuarios con perfil user (estándar). La funcionalidad de cada ruta se define mediante las funciones del controlador `productController.js`.

#### Carpeta utils
- `utils/helperFunctions.js`: contiene funciones auxiliares para generar el HTML que se envía como respuesta en las funciones de los controladores.
- `utils/htmlTemplates.js`: contiene fragmentos de HTML almacenado en variables. Estos fragmentos son utilizados por las funciones auxiliares para generar el HTML final que se sirve en las respuestas de las peticiones.

#### Fuera de una subcarpeta

- `index.js`: Archivo principal que inicia el servidor con Express, centraliza todas las acciones definidas en las demás subcarpetas. Utiliza métodos para analizar el cuerpo de las solicitudes que contienen datos en formato JSON y/o de formulario (application/x-www-form-urlencoded) y los hace accesibles mediante el req.body. También gestiona las sesiones de los usuarios, se conecta con la base de datos de MongoDB, define todas las rutas y sirve archivos estáticos (CSS).

### Carpeta test
- `test/productController.test.js`: contiene los tests que aseguran que las funciones utilizadas en esta aplicación funcionan adecuadamente.

### Carpeta public
- `public/styles.css`: contiene los estilos de la aplicación.
- `public/img`: carpeta donde se almacenan las imágenes utilizadas en la web.

### Fuera de una carpeta específica
- `.env`: contiene las variables de entorno: el puerto donde escucha el servidor, la uri de la base de datos y un secreto alternativo para las sesiones.

- `package.json`: contiene las dependencias del proyecto y los script para iniciar el servidor con node ("start": "node src/index.js") y para iniciar el servidor con nodemon ("dev": "nodemon src/index.js").

## Funciones
### Funciones del controlador de productos:

Todas las funciones devuelven la respuesta en HTML o JSON dependiendo de si en la ruta encuentran la palabra "shop" o "api".

- `getNewProductForm`: devuelve el formulario de creación de un nuevo producto. Solo se ejecuta en las rutas "dashboard".
- `createProduct`: Crea de un nuevo producto en la base de datos. Redirige a "/dashboard" o devuelve el producto creado en JSON.
- `filterCategroy`: Filtra y muestra los productos según su categoría. 
- `getProducts`: devuelve todos los productos existentes.
- `getProductById`: muestra los detalles de un producto específico por su ID.
- `getEditProductForm`: devuelve un formulario para editar un producto existente. Solo se ejecuta en las rutas "dashboard".
- `updateProduct`: Actualiza la información de un producto existente por su ID. Solo se ejecuta en las rutas "dashboard".
- `deleteProduct`: Elimina un producto existente por su ID. Solo se ejecuta en las rutas "dashboard".

### Funciones del controlador de autenticación:

- `getRegisterForm`: devuelve el formulario de registro de nuevo usuario. Incluye chechbox para indicar el perfil del usuario (user o admin).
- `createAccount`: realiza el registro de un nuevo usuario mediante Firebase Authentication, crea un nuevo usuario en la base de datos especificando su perfil, inicia sesión automáticamente en Firebase y express-session y redirige a `/shop/products` o `/shop/dashboard` según el perfil del nuevo usuario.
- `getLoginForm`: devuelve el formulario de inicio de sesión de usuario.
- `login`: realiza el incio de sesión de un usuario utilizando Firebase Authentication y express-session y redirige a la ruta correspondiente según el perfil del usuario.
- `logout`: cierra la sesión del usuario actual en Firebase y express-session.

### Funciones auxiliares

- `generateHtml`: genera el HTML que se devuelve en las respuestas al servidor (incluye la generación del navBar).
- `generateIndex`: genera el HTML de la ruta raíz `/`. Inlcuye enlaces para acceder a la tienda (HTML), a la API (JSON) o a la documentación de la API.
- `populateEditForm`: pone como placeholder en el formulario de edición de un producto la información actualmente almacenada de ese producto.
- `printAllProducts` y `printSingleProduct`: genera el HTML de los productos almacenados en la base de datos e incluye un enlace para acceder a la vista detallada del producto (printAllProducts) o para volver (y para editar y borrar en el caso del administrador) a la lista de todos los productos.

## Endpoints

Esta app contiene diferentes endpoints a los que se accede según el perfil del usuario que realiza la petición: cliente (visitante sin identificar o usuario estándar) o administrador.

### Cualquier visitante

- `app.get('/')`: Raíz, da la opción de continuar a la tienda (HTML), a la API (JSON) o a la documentación de la API.

Según la selección del usuario, las siguientes rutas irán precedidas de:
- `/shop/` si selecciona la opción "Tienda".
- `/api/` si selecciona la opción "API".

Si selecciona la opción "Documentación API", se redirige al endpoint `/api/api-docs/`, donde se visualiza la documentación de la API con Swagger.

### Tienda: usuarios sin identificar o identificados con perfil estándar
Tras seleccionar la opción "Tienda" todas las rutas se inician con `/shop/`

- `router.get('/')`: redirecciona a `/products`.
- `router.get('/products', productController.getProducts)`: Devuelve todos los productos. Cada uno de ellos dispone de un enlace a su página de detalle.
- `router.get('/products/:productId', productController.showProductById)`: Devuelve el detalle de un producto concreto.

##### El backend dispone de un enrutado especifico que devuelve los datos en formato json para la API.

- `router.get('/products', apiController.showProductsApi)`: Devuelve todos los productos. Cada uno de ellos dispone de un enlace a su página de detalle.
- `router.get('/products/:productId', apiController.showProductByIdApi)`: Devuelve el detalle de un producto concreto.

### Tienda: usuarios identificados con perfil de administrador

Esta aplicación 
La aplicación 'Tienda de ropa' esta especialmente pensada para el uso en el backend de los administradores de esta. Por ello dispone de un sistema de autenticación, la encriptacion y el hash realizado por crypto y bcrypt, mientras que el middleware de sesión autenticada comprobada gracias a la configuración del proyecto en `firebase`. 

Una vez el administrador ha sido autenticado los endpoints a los que puede acceder son:

- `router.get('/dashboard/',checksession, productController.showProducts)`: Devuelve todos los productos. Cada uno de ellos dispone de un enlace a su página de detalle. 
- `router.get('/dashboard/:productId',checksession, productController.showProductById)`: Devuelve el detalle de un producto concreto, el cuál se puede editar o borrar siendo administrador.
- `router.get('/dashboard/new',checksession, productController.showNewProductForm);`: Devuelve el formulario para la creación de un nuevo producto.
- `router.get('/dashboard/:productId/edit',checksession, productController.showEditProductForm)`: Devuelve el formulario para la edición de un producto concreto.
- `router.get('/dashboard/:productId/delete',checksession, productController.deleteProductById)`: Elimina un producto y devuelve un mensaje.

En todos ellos se usa la funcion `checksession` que actúa como middleware para comprobar si hay una sesión iniciada. Si no lo está, redirige al login.

### Tienda: identificación de usuario
- `router.get('/login/',authController.loginUserform)`: Devuelve el formulario para realizar el login al usuario/administrador. La respuesta devuelta viene en formato HTML. Desde aqui tambien podemos acceder al formulario de registro.
- `router.post('/login/', authController.loginUser)`: Envia el email y el password aportado por el usuario/administrador, lo autentica y si las credenciales son correctas redirecciona al dashboard de productos de administrador, si no redirecciona de nuevo a login.

- `router.get('/register/', authController.createUser)`: Devuelve el formulario para realizar la creacion de usuario. La respuesta devuelta viene en formato HTML.

- `router.post('/register/', authController.saveUser)`: Guarda la autenticacion mediante email y contraseña del usuario creado y lo redirecciona al dashboard de productos de administrador.

- `router.get('/logout', authController.logout)`: Cierra sesión de usuario autenticada y redirecciona a la pagina principal.

### API

- `router.post('/dashboard', apiController.createProductApi)`: Crea un nuevo producto y nos envía un mensaje de confirmación.
- `router.put('/dashboard/:productId', apiController.updateProductByIdApi)`: Modifica y actualiza un producto. También nos devuelve un mensaje de confirmación.
- `router.get('/dashboard/:productId/delete', apiController.deleteProductByIdApi)`: Elimina un producto y nos devuelve un mensaje de confirmación.


## Funcionamiento de la aplicación

La aplicación 'Tienda de ropa' esta desarrollada en Node.js. Para ello se han utilizado varias dependencias que explicaremos a continuación.

- `bcrypt`: Bcrypt es una función de hash de contraseñas y derivación de claves para contraseñas basada en el cifrado Blowfish.

- `crypto`: Herramienta que permite encriptar y desencriptar String en Node.js.

- `dotenv`: Es un módulo de dependencia cero que carga las variables de entorno desde un archivo .env.

- `express`: Es el entorno de trabajo en el que se ha desarrollado la app y por el cual se ha lanzado un servidor el cual está escuchando por variable de entorno en:  http://localhost:${PORT};

- `express-session`: Es un middleware que almacena los datos de sesión en el servidor.

- `firebase`: Es una solución creada por Google para el desarrollo y mejora de aplicaciones. En nuestro caso hemos desarrollado la autenticación del usuario/administrador.

- `method-override`: Middleware para Express que permite utilizar métodos HTTP como PUT o DELETE en formularios HTML.

- `mongoose`: Es una librería de Node.js que nos permite realizar consultas y peticiones a bases de datos alojadas en MongoDB Atlas.

- `swagger-ui-express`: Es una infraestructura de visualización que puede analizar la especificación OpenAPI y generar una consola de API para que los usuarios puedan aprender y ejecutar la API REST de forma rápida y sencilla. En nuestro caso solo se ejecutarán las rutas "api".

- `jest`: Es una biblioteca de Node.js para crear, ejecutar y estructurar pruebas o test. En nuestro caso se han realizado los test a las funciones de la aplicación.