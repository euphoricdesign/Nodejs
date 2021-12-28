// Para comenzar a escribir nuestro servidor vamos a requerir express, paquete que acabamos de instalar 

// Primeramente definamos qué es Express. Básicamente es un marco de desarrollo minimalista para Node.js que permite estructurar una aplicación de una
// manera ágil, nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc.

// const express = require('express');

// const app = express() // creamos una app de express ejecutando express

// A partir de aquí, esta app va a poder recibir peticiones, pero para que reciba peticiones debemos levantar nuestro servidor. 
// Debemos agregar un listener a esta app, que debe estar atento a cualquier petición, para esto usamos el método listen()

// app.listen()

// listen() recibe dos cosas, un puerto y una función callback que nos va a avisar cuando el servidor este levantado.
// El puerto es un valor númerico, vamos a decir que se levante en el puerto 3000 de nuestro computador. listen vincula y escucha
// las conexiones en el host y el puerto especificados.

// app.listen es efectivamente una función contenedora que llama a HTTP.createServer. createServer configura un detector
// de eventos en el bucle de eventos. Cuando el sistema operativo recibe una solicitud HTTP en el puerto particular
// que se está escuchando, como el puerto 3000, Express procesa la solicitud.
// Dado que createServer es una operación asincrónica, se ejecuta en el bucle de eventos una vez que se ejecuta
// el programa principal. Por lo tanto, no importa dónde se coloque este código. En la mayoría de los ejemplos,
// se encuentra al final como un estándar en lugar de como requisitos técnicos.

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`servidor escuchando en http://localhost:${PORT}`);
// }) 


// Localhost es el nombre comúnmente utilizado para designar el equipo que estamos utilizando. Hace referencia a la
// computadora o dispositivo que estamos usando en un momento concreto. La traducción literal del término sería “huésped local”,
// aunque es más correcto definirlo como servidor o dispositivo local. Como su propio nombre indica, un servidor local está
// localizado en el propio equipo o host. Por ejemplo, si ejecutamos un programa en nuestro ordenador, éste es el localhost.
// Por el contrario, si accedemos a un servidor externo, ya no es un localhost. El localhost siempre refiere al servidor local de
// la máquina en la que estamos trabajando.

// De esta forma le estamos diciendo que escuche en el puerto 3000 y cuando se levante el servidor nos lo notifique.


// En este momento tenemos un servidor , pero no le estamos agregando la capacidad para que escuche 

// Seguido del puerto vamos a decirle a la app de express que se encargue de escuchar las peticiones de nuestro servidor, 
// lo vamos a hacer mediante los verbos http 

// const express = require('express');

// const app = express() 
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hola mondo desde expressjsss'
//   })
// })

// Cada verbo recibe dos cosas fundamentales una es la ruta y lo segundo que recibe es el controlador de dicha ruta.
// El primer parametro es un string que contiene una ruta. El slash en este caso indica que cuando alguien ingrese a http://localhost:3000 debe responder
// con lo que le vamos a pasar en la función que se va a encargar de controlar esa ruta.
// Seguido, como ya dijimos, va a necesitar una función que se va a encargar de controlar las peticiones a nuestro servidor. Para eso le pasamos
// un callback, esta función recibirá dos parámetros: req (request), la petición que hagan a mi servidor y el segundo parámetro es res (response)
// que es la respuesta que nosotros vamos a enviar a nuestros clientes 

// res.json acepta un objeto o matriz y lo convierte a JSON antes de enviarlo.


// app.listen(PORT, () => {
//   console.log(`servidor escuchando en http://localhost:${PORT}`);
// }) 


// Le hemos agregado la capacidad de escuchar peticiones nuestro servidor, peticiones de tipo 'get' en la URL base. Ahora,
// ¿qué es lo que nos va a estar respondiendo?
// Vamos a responder datos de usuarios. Inicialmente hacemos una pequeña prueba de un "hello world" con nuestro servidor, para eso 
// solamente utilizamos el objeto de respuesta (res).


// Ahora nos toca preparar los datos que nosotros vamos a mostrar cuando alguien haga una petición a nuestro servidor
// Para esto vamos a utilizar mockaroo. Se trata de una herramienta web desde la que vamos a poder generar hasta 100.000 líneas de datos 
// realistas para pruebas que podremos exportar en formato CSV, Tab-Delimited, JSON, SQL, Excel y DBUnit XML.

// Una vez que tenemos nuestro archivo MOCK-DATA.json, esto va a simular nuestra base de datos. Aún no tenemos una db así que debemos simularla.
// Vamos a suponer que estos son los datos que nos sirve una base de datos. 

// Vamos a traer los datos de MOCK-DATA acá, a mi pequeño servidor 

// const express = require('express');

// const data = require('./MOCK_DATA.json') // estos son datos que no van a cambiar inicialmente que traemos a traves del método requiere con la ayuda de la extensión relative path que obtiene la ruta relativa a cualquier archivo en el espacio de trabajo.

// const app = express() 
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.json(data)
// })

// app.listen(PORT, () => {
//   console.log(`servidor escuchando en http://localhost:${PORT}`);
// }) 

// Ahora que tenemos almacenados todos los datos que contiene MOCK-DATA en la variable "data" vamos a servir estos datos cuando alguien haga 
// una petición a mi servidor 

// Para esto en app.get le digo que en lugar de devolver el mensaje que tenía hasta ahora devuelva "data"

// Recoradar que para que estos cambios se efectuen debemos reiniciar el servidor.
// Esta tarea puede resultar algo tediosa a lo largo del desarrollo y es por eso que anteriormente instalamos nuestra dependencia de nodemon.
// Nodemon nos va a permitir mantener el servidor activo y cada cambio que hagamos en nuestro archivo se va a ir refrescando automáticamente 
// y no vamos a tener que volver a nuestra terminal, detener el proceso, volver a iniciarlo y así.

// Para trabajar con nodemon vamos a ir a nuestro package.json y vamos a ver una sección llamada scripts, aquí podemos escribir scripts que nos
// permitan realizar tareas. Vamos a escribir una tarea que nos permita inicializar nuestro servidor con nodemon. De esta forma nodemon va a trabajar
// adecuadamente, únicamente en el ambito de nuestro proyecto.
// En scripts por defecto vamos a tener un script llamado "tests", que realmente no vamos a necesitar así que podemos eliminarlo. 
// Creamos una nueva propiedad dentro de scripts llamada "dev" y a la derecha vamos a decirle que ejecute "nodemon index.js"
// De esta forma nodemon se va a ejecutar solamente en el ambito de nuestro proyecto, anteriormente estabamos ejecutando en el ambito general del computador
// pero nodemon esta trabajando como dependencia de desarrollo en nuestro proyecto.

// Una vez hecho este cambio ¿Como ejecutamos el script/tarea que acabamos de crear? para ello vamos a valernos de npm.
// Escribimos en la terminal npm run [nombre del script], en este caso npm run dev, damos enter y vamos a ver que ya esta trabajando nodemon.

// De esta forma si hacemos algún cambio inmediantamente nodemon recargará automaticamente esos cambios y vamos a poder trabajar de forma más rápida 
// en nuestro desarrollo.


// const express = require('express');

// const data = require('./MOCK_DATA.json') 

// const app = express() 
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.json({
//     message: "Lista de usuarios",
//     body: data
//   })
// })

// app.listen(PORT, () => {
//   console.log(`servidor escuchando en http://localhost:${PORT}`);
// }) 

// Ya tenemos trabajando adecuademente nuestro servidor.





// Ahora vamos a trabajar con el acrónimo CRUD dentro de nuestro pequeño proyecto de servidor web.
// CRUD (Create, Read, Update, Delete) es un acrónimo para las maneras en las que se puede operar sobre información almacenada. 
// Es un nemónico para las cuatro funciones del almacenamiento persistente. CRUD usualmente se refiere a operaciones llevadas a
// cabo en una base de datos o un almácen de datos.

// *nemónico es una palabra que sustituye a un código de operación, con lo cual resulta más fácil la programación.

// Crear, leer, actualizar datos. Vamos a hacer todas estas tareas dentro de nuestros MOCK-DATA.
// Haremos algunos cambios en la estructura de archivos del ptoyecto, como primer paso generamos una carpeta llamada "src" en nuestra carpeta "ServidoresWeb"
// Esta carpeta va a contener todos los recursos que va a necesitar nuestro proyecto para trabajar. Como MOCK-DATA es un recurso lo movemos a esta carpeta
// Creamos el archivo service.js (archivo que se va a encargar de manejar nuestros datos). Ya no necesitamos la variable data en este archivo.
// Y para que no exista ningún otro error en lugar de data voy a devolver un array vacío


// const express = require('express');

// const Service = require('./src/service') // requerimos nuestro archivo service

// const app = express() 
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.json({
//     message: "Lista de usuarios",
//     body: Service.getUsers()
//   })
// })

// app.listen(PORT, () => {
//   console.log(`servidor escuchando en http://localhost:${PORT}`);
// }) 

// Ya implementamos nuestra capa de servicio para que la misma se encargue de manejar los datos y en index solo retornamos la respuesta. Volvemos a service.js


// Como ya tenemos un método para crear usuarios debemos generar en este archivo otra ruta para exponer en mi servidor para que se pueda crear un usuario 
// Hay algo esencial que se debe saber: cada ruta que creamos/exponemos también se les conoce como endpoints (puntos finales) 
// Por lo que vamos entonces a agregar un nuevo endpoint 

// Esta vez utilizamos el verbo http POST ya que lo que queremos hacer es crear un nuevo recurso en el servidor
// Otra cosa importante que hay que saber es que se puede receptar peticiones de diferentes tipos a la misma ruta. En este caso hacemos un POST a la misma ruta.

// const express = require('express');

// const Service = require('./src/service');

// const app = express() 
// const PORT = 3000;

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.json({
//     message: "Lista de usuarios",
//     body: Service.getUsers()
//   })
// })

// app.post('/', (req, res) => {
//   let { body: newUser } = req
//   let user = Service.createUser(newUser)
//   res.status(201).json({
//     message: 'Usuario agregado',
//     body: user
//   })
// })

// app.listen(PORT, () => {
//   console.log(`servidor escuchando en http://localhost:${PORT}`);
// }) 


// Lo que vamos a hacer primero es recibir los datos del usuario, ¿cómo lo hacemos? hasta el momento nuestro servidor no tenia la capacidad de recibir datos 
// para ello nos ubicamos seguido de const PORT = 3000 y llamamos app.use(), método que está destinado a enlazar middlewares a su aplicación y dentro de los
// parentesis llamamos a express.json(). Este es un método incorporado en express para reconocer el objeto de solicitud entrante como un objeto JSON.
// Este método se llama como middleware en su aplicación de esta manera.

// Ahora si ya podemos recibir datos, estos datos van a venir en el cuerpo de la petición POST 

// Generamos la variable newUser donde vamos a almacenar "req.body" recordar que request es la petición que hacen a nuestro servidor y esta petición tiene una
// sección de cuerpo que contiene los datos que vienen en esa petición enviados desde el cliente.
// Si a esto último lo hacemos con desestructuración let { body: newUser } = req.

// Lo que hicimos seguido de esto es utilizar nuestro servicio (service.js) para agregar ese nuevo elemento en el arreglo, como nuestro servicio ya esta importado 
// simplemente le decimos Service.createUser con los datos del usuario, en este caso newUser.
// Una vez creado el usuario lo que hacemos es responder a nuestro cliente que los datos han sido agregados para eso utilizamos el objeto res de respuesta.

// Lo último que agregamos va a ser el status de la respuesta, que es algo que podemos modificar según lo que estemos haciendo o creando en este caso.
// 201 es el código que nos indica que se ha creado un recurso exitosamente. Página con todos los códigos de estado https://httpstatuses.com/

// Hasta acá tenemos nuestro pequeño servidor que puede enviar toda una lista de usuarios y también puede crear un nuevo usuario.




// Ahora vamos a revisar lo que es el direccionamiento.
// El direccionamiento básico hace referencia a cómo responde una aplicación a una solicitud de cliente en un punto final en concreto, que viene 
// a ser un URI (o una zona de acceso) y un método de soliticitud HTTP (GET,POST,PUT,etc).

// Hay muchas rutas y cada una puede tener una o varias funciones a tratar.

// Las rutas en ExpressJS son las que sirve nuestra aplicación y a las cuales nosotros le programamos una lógica para así devolver los resultados que
// el cliente solicita.

// Rutas GET: Este tipo de rutas se caracteriza por mostrar información al usuario sin que se procesen datos introducidos por el usuario. Por ejemplo,
// una página que muestra información sobre un producto o una página de “quienes somos” normalmente manejan una petición GET.
// En este tipo de rutas no debemos de introducir datos sensibles, como contraseñas o datos de sesión, ya que se guardan en el navegador y son visibles.

// vamos a construir un nuevo endpoint de tipo get.

// En las rutas podemos pedir parámetros para, en base a esos parámetros enviar una respuesta adecuada 
// estos parámetros van a actuar como variables en la petición que realice el cliente 
// ¿Como estructuro mi url para recibir un parametro? Lo hacemos con la notación ":" 
// Vamos recibir una peticiones en la ruta base, pero además voy a solicitar un parametro, 
// este parámetro va a ser el id de cada usuario.


// const express = require('express');

// const Service = require('./src/service');

// const app = express() 
// const PORT = 3000;

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.json({
//     message: "Lista de usuarios",
//     body: Service.getUsers()
//   })
// })

// app.get('/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id);

//   res.json({
//     message: "Lista de usuarios",
//     body: Service.getUsers()
//   })
// })

// app.post('/', (req, res) => {
//   let { body: newUser } = req
//   let user = Service.createUser(newUser)
//   res.status(201).json({
//     message: 'Usuario agregado',
//     body: user
//   })
// })

// app.listen(PORT, () => {
//   console.log(`servidor escuchando en http://localhost:${PORT}`);
// })

// Este parametro :id podemos obtenerlo del objeto request, la petición que nos hace el cliente. 
// Inicialmente generamos la variable id que va a contener todos los parametros de ruta que nos envie el cliente (req.params)
// Imprimimos por consola la variable id, que, en caso de que sea igual a req.params.id me va a retornar un 3, pero si fuera
// igual a solo req.params nos devolvería { id: '3' }
// nos imprime un objeto que tiene los parametros que estamos recibiendo en la ruta, algo en lo que hay que prestar atención
// es que todos los parámetros que nos llegan en la ruta siempre van a llegar como strings.









// Ya sabemos en dónde vienen estos parámetros y sabemos como obtenerlos ahora hay que escribir un código valido para trabajarlo


const express = require('express');

const Service = require('./src/service');

const app = express() 
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: Service.getUsers()
  })
})

app.get('/:id', (req, res) => {
  let { params: { id } } = req;
  let user = Service.getUser(id)

  res.json({
    message: `Usuario ${id}`,
    body: user
  })
})

app.post('/', (req, res) => {
  let { body: newUser } = req
  let user = Service.createUser(newUser)
  res.status(201).json({
    message: 'Usuario agregado',
    body: user
  })
})

app.put('/:id', (req, res) => {
  let { params: { id } } = req;
  let changeUser = req.body
  let usuarioModificado = Service.modifyUser(id,changeUser)

  res.json({
    message: 'Usuario Modificado',
    body: usuarioModificado
  })
})


app.delete('/:id', (req,res) => {
  let { params: { id } } = req;
  let usuarioEliminado = Service.deleteUser(id)

  res.json({
    message: 'Usuario eliminado',
    body: usuarioEliminado
  })
})

app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
})

console.log(global)

// Entonces primero empleamos desestructuración anidada para extraer el id del objeto request
// Lo que queremos hacer es obtener un usuario en base a nuestro Servicio (service.js) pasandole como
// parámetro el id.
// Para eso escribimos en una variable el usuario que vamos a obtener de Service.getUser, hasta 
// el momento solo teníamos la función getUsers() en plural, para obtener todos los usuarios. 
// a getUser vamos a indicarle que va recibir un id, en base a eso me va retornar un usuario y el mismo
// lo vamos a retornar en la propiedad body de la respuesta que enviamos al cliente.  Ahora vamos a nuestro servicio a escribir 
// esta función getUser()



// Nuestro endpoint ya esta funcionando perfectamente!


// Vamos a empezar a trabajar con el proyecto final que será una API, desarrollada por módulos, que va a estar sostenida
// por express. Inicialmente tendremos tres módulos: Usuarios, Productos y Ventas. 
// En cuánto a la base de datos/persistencia de datos trabajaremos con Mongo DB en Mongo Atlas, que es mongo db, pero 
// en la nube.
// Nuestra API va a lograr recibir peticiones desde cualquier cliente.