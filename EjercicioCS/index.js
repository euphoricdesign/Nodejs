// const axios = require('axios');

// require () no forma parte de la API de JavaScript estándar. Pero en Node.js, es una función incorporada con un
// propósito especial: cargar módulos. Los módulos son una forma de dividir una aplicación en archivos separados
// en lugar de tener toda su aplicación en un solo archivo.


// const main = async () => {


//   // get() es una función que dentro recibe como parámetro la url a la que yo quiero enviar esa petición get, para ello vamos al navegador 
//   // donde tenemos la url de la api de rick and morty.

//   let res = await axios.get('https://rickandmortyapi.com/api/character') // Para manejar la respuesta que nos devuelve axios siempre hay que almacenarla en una variable.

//   // De esta forma estamos escribiendo un cliente que va a realizar una petición de tipo GET al servidor que le pasamos 
//   // Vemos que en la url además de 'http' también hay una 's' que es de seguridad, es un protocolo más seguro.

//   console.log(res)
// }

// main()

// Esta respuesta va a traernos absolutamente toda la estructura de respuesta que nos manda el servidor. 
// Ya no vamos a ejecutar el código como lo veníamos haciendo, ahora vamos a ejecutar nuestro programa de forma profesional 
// Vamos a empezar a trabajar con node!

// Escribimos en la terminal el comando: node ./index.js (El archivo que queremos ejecutar), damos enter y vamos a ver que inmediantamente 
// el servidor nos va a devolver un montón de información.
// Nos devuelve primero que nada un status: 200/OK (devuelve una respuesta correcta)
// Luego también vemos los headers, algo importante que veremos más adelante. De momento lo que hay que enteder es que nos 
// devolvió toda la respuesta del servidor, realmente hay cosas que no topamos acá o no debemos topar, pero esta toda la respuesta acá.

// Al final de toda la respuesta nos vamos a encontrar con la propiedad "data" que contiene el json que vimos en el navegador 
// El que contiene info y results con los personajes de la serie. Axios a esta respuesta la va a meter en "data".

// Vamos a empezar a trabajar con todo lo que ya vimos: 

// const axios = require('axios');

// const main = async () => {
//   let res = await axios.get('https://rickandmortyapi.com/api/character')
//   let { data: {results} } =  res; // desestructuración anidada: si un objeto está compuesto de otros objetos y matrices, podemos usar patrones más complejos del lado izquierdo para extraer partes más profundas.
  
//   console.log(results)
// }

// main()

// Esto ya me trae los personajes.





// Vamos a obtener únicamente el id de los personajes utilizando métodos ya conocidos:

// const axios = require('axios');

// const main = async () => {
//   let res = await axios.get('https://rickandmortyapi.com/api/character')
//   let { data: {results} } =  res; 
//   let personajes = results.map(({id,name}) => {
//     return {
//       id,
//       name
//     }
//   })
  
//   console.log(personajes)
// }

// main()


// Vamos a empezar a ver algunos módulos de node js. Estos módulos vienen ya "pre-cargados" dentro de la herramienta node. Son librerías 
// que ya existen desde el momento en que instalas node js, al igual que npm. 
// Esto quiere decir que esta dependencia no es necesaria instalarla a traves de la linea de comando con npm install, ni va a existir un registro
// de esto en package.json.

// Los modulos que vamos a ver ahora son dos, el primero "fs", módulo que nos va a ayudar a controlar el file system del computador en el que 
// se encuentre corriendo y un módulo que es bastante útil que se llama "path" que nos ayudará a generar las rutas dentro de nuestro computador.

// Seguiremos trabajando con el código anterior.

// Con los datos que obtuvimos hasta el momento vamos a hacer un archivo csv. Un csv es un archivo con datos separados por comas. 

// const axios = require('axios');

// const main = async () => {
//   let res = await axios.get('https://rickandmortyapi.com/api/character')
//   let { data: {results} } =  res; 
//   let personajes = results.map(({id,name,status,species}) => {
//     return {
//       id,
//       name,
//       status,
//       species
//     }
//   }).map((personaje) => Object.values(personaje).join(','))
  
//   console.log(personajes)
// }

// main()

// Seguido del primer map(), vamos a tener otro map() porque lo que necesitamos es modificar el array que tenemos para que retorne únicamente
// los valores de cada objeto. 

// Recordemos que Object.values nos retorna un array con los valores del objeto. En este arreglo vamos a implementar el método join(), Es decir
// vamos a juntar todo este arreglo y a generar un string. 
// join() recibe un parámetro que es el caracter con el que vamos a unir todos los elementos.

// Nos falta que todos estos valores que estamos obteniendo esten unidos para que formen un solo string y nosotros poder enviar esto a nuestro archivo
// y también para que deje de ser un arreglo porque al arreglo no lo va a reconocer nuestro archivo csv que lo único que reconoce es texto separado
// por comas. 

// Lo que vamos a hacer después del último map es un join() de este arreglo. A este join le vamos a pasar un caracter especial '/n' el
// mismo va a agregar un salto de linea en cada espacio de cada uno de los elementos separados por comas 

// const axios = require('axios');
// const fs = require('fs').promises;
// const path = require('path');

// const main = async () => {
//   let res = await axios.get('https://rickandmortyapi.com/api/character')
//   let { data: {results} } =  res; 
//   let personajes = results.map(({id,name,status,species}) => {
//     return {
//       id,
//       name,
//       status,
//       species
//     }
//   }).map((personaje) => Object.values(personaje).join(',')).join('\n')
  
//   console.log(personajes)
// }

// main()

// Esta vez ya obtemeos un solo string y veremos que cada personaje esta separado por un salto de linea.


// Estos son los datos que vamos a mandar a nuestro archivo csv para que se genere, para ello vamos a ver los dos módulos de los que hablamos 

// Nos dirijimos a la parte superior de nuestro código ya que los paquetes que utilicemos se trabajan en esta parte del archivo.
// El primer paquete que vamos a utilizar es el de fs. Algo que debes hacer con este paquete para trabajar de forma asincrona es que, seguido del 
// requiere vamos a agregarle un punto "." y la palabra promises.
// De esta forma el paquete va a traer fs con la funcionalidad de promesas. Esto es especifico solo del paquete de file system.

// Luego vamos a traer el segundo paquete que es "path". path es una funcionalidad de node que nos va a ayudar a generar las rutas de donde queremos 
// almacenar nuestros archivos

// Para hacer una prueba de como trabaja path vamos a hacer dos impresiones. En la primera vamos a imprimir una variable global que existe en node
// ¿para que sirven las variables globales? son variables que estan disponibles dentro de todo tu computador mediante node.
// Una de ellas: __dirname que nos devolverá el path en el que nos encontramos 


// const axios = require('axios');
// const fs = require('fs').promises;
// const path = require('path');

// const main = async () => {
//   let res = await axios.get('https://rickandmortyapi.com/api/character')
//   let { data: {results} } =  res; 
//   let personajes = results.map(personaje => {
//     return {
//       id: personaje.id,
//       name: personaje.name,
//       status: personaje.status,
//       species: personaje.species
//     }
//   }).map((personaje) => Object.values(personaje).join(',')).join('\n')
  
//   console.log(__dirname); C:\Users\Merlina\Desktop\node js\EjercicioCS

//   console.log(personajes)
// }

// main()

// Ahora, ¿para qué trabajar con path?  porque, como ya se mencionó, con path podemos generar rutas!

// const axios = require('axios');
// const fs = require('fs').promises;
// const path = require('path');

// const main = async () => {
//   let res = await axios.get('https://rickandmortyapi.com/api/character')
//   let { data: {results} } =  res; 
//   let personajes = results.map(personaje => {
//     return {
//       id: personaje.id,
//       name: personaje.name,
//       status: personaje.status,
//       species: personaje.species
//     }
//   }).map((personaje) => Object.values(personaje).join(',')).join('\n')
  
//   console.log(path.join(__dirname, 'data.csv'));

//   console.log(personajes)
// }

// main() // C:\Users\Merlina\Desktop\node js\EjercicioCS\data.csv

// path tiene un método, al cuál accedemos a traves de la notación punto ".", este método se llama join(), el mismo va a recibir una serie de 
// argumentos indefinidos, puedes agregar los que tu quieras y a partir de ahí el va a crear un path. En este caso le agregamos __dirname y 
// un nombre de archivo que es 'data.csv' que va a ser el archivo en el que nosotros queremos almacenar nuestros datos.

// Esto nos imprime primero el path.join. Lo que hizo es juntar nuestra ruta de __dirname con lo que le vayamos agregando.
// De esta forma podemos agregar rutas en nuestro sistema operativo desde node.

// Ahora lo que vamos a hacer es generar nuestro archivo con file system (sistema de archivos).
// fs nos permite acceder al sistema de archivos para poder leer sus contenidos y crear otros archivos o carpetas.
// Recordar que fs trabaja con promesas, es decir vamos a resolver promesas ¿como? con await

// Tenemos que poner mucho cuidado en entender el concepto de programación asincrónica que propone la plataforma de Node.js
// La programación asincrónica busca no detener la ejecución del programa en forma completa por actividades que requieren mucho
// tiempo (una analogía es imaginar que nuestro entorno Node.js es un "mozo de restaurante" que va a una mesa y toma el pedido
// y lo envía a la cocina, la eleboración del pedido toma su tiempo pero el mozo no se queda congelado hasta que la cocina le
// avisa que el pedido está preparado sino que sigue tomando pedidos en otras mesas)

// El módulo de administración de archivos "fs" implementa la programación asincrónica para procesar su creación, lectura,
// modificación, borrado etc.


const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  let res = await axios.get('https://rickandmortyapi.com/api/character')
  let { data: {results} } =  res; 
  let personajes = results.map(({id, name, status, species}) => {
    return {
      id,
      name,
      status,
      species
    }
  })

  // join
  let personajesString = personajes
                        .map((personaje) => Object.values(personaje).join(','))
                        .join('\n');

  const cabeceras = Object.keys(personajes[0]).join(',');

  const personajesConCabecera = cabeceras.concat('\n', personajesString)

  await fs.writeFile(path.join(__dirname, 'data.csv'), personajesConCabecera)
}

main()

// Llamamos a la función writeFile a través de la constante fs. Esta función tiene dos parámetros: uno es el path en donde vas a escribir el archivo
// incluyendo el nombre del archivo y el segundo parametro son los datos que vas a almacenar en ese archivo.

// para el primer parametro vamos a utilizar la funcionalidad path.join, a la misma le pasamos el __dirname y el nombre del archivo 'data.csv'.
// Esto solamente sería el primer parametro de writeFile, el lugar en donde vamos a guardar los datos, incluyendo el archivo.
// Seguido va a recibir un string con los datos que queremos almacenar, que en nuestro caso son los datos que obtuvimos de la api de rick and morty
// que ya los tenemos listos en nuestra variable personajesConCabecera.
// De esta forma vamos a tener ya listo nuestro archivo.

// Inmediatamente dentro de la carpeta EjercicioCS vamos a tener ahora nuestro archivo data.csv