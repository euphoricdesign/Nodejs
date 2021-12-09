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

// Seguido del puerto vamos a decirle a 'app' que se encargue de escuchar las peticiones de nuestro servidor, lo vamos a hacer mediante los verbos 
// http 

const express = require('express');

const app = express() 
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hola mondo desde expressjsss'
  })
})

// Cada verbo recibe dos cosas fundamentales una es la ruta y lo segundo que recibe es el controlador de dicha ruta.
// El primer parametro es un string que contiene una ruta. El slash en este caso indica que cuando alguien ingrese a http://localhost:3000 debe responder
// con lo que le vamos a pasar en la función que se va a encargar de controlar esa ruta.
// Seguido, como ya dijimos, va a necesitar una función que se va a encargar de controlar las peticiones a nuestro servidor. Para eso le pasamos
// un callback, esta función recibirá dos parámetros: req (request), la petición que hagan a mi servidor y el segundo parámetro es el (response) que es la respuesta que nosotros vamos a enviar
// a nuestros clientes 


app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}/`);
}) 


// Le hemos agregado la capacidad de escuchar peticiones nuestro servidor, peticiones de tipo 'get' en la URL base. Ahora, ¿qué es lo que nos va a estar respondiendo?
// vamos a responder datos de usuarios.


