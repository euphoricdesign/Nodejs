// este archivo permite conectar con mongo atlas, la base de datos ya configurada

const { MongoClient } = require('mongodb');
const debug = require('debug')('app:module-database');

// module.exports.Database = (collection) => new Promise( async (res, rej) => {
//   try {
//     const client = new MongoClient();
//     let connection = await client.connect()
//   } catch(err) {

//   }
// })

// De esta forma cada vez que ejecutemos este código lo que va a suceder es que va a
// generar una nueva conexión al servidor. Para evitar que el servidor realice una 
// nueva conexión a cada instante hacemos lo siguiente:

let connection = null; // arranca nula 

module.exports.Database = (collection) => new Promise( async (res, rej) => {
  try {
    if(!connection) {//por lo que de entrada creamos una
      const client = new MongoClient();
      connection = await client.connect()
      debug('Nueva colección realizada');
    }
    debug('Reutilizando conexión')
    const db = connection.db(); // En caso de que ya exista una conexión lo que hacemos es traernos la base de datos de dicha conexión
    res(db.collection(collection)) // Si la promesa se resuelve que nos devuelvan la colección solicitada

  } catch(err) {
    rej(err)
  }
})

// MongoClient() recibe un parámetro para conectarnos a nuestra base de datos el método connection.db() recibe el nombre de la base de datos
// a la que quiero conectarme 