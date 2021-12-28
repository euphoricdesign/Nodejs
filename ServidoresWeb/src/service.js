// Este archivo se va a encargar de manipular todos nuestros datos (de MOCK-DATA) en cuánto al acronimo CRUD, es decir, aquí es donde vamos a trabajar
// con create, read, update y delete, por eso traemos/requerimos la data:

const data = require('./MOCK_DATA.json')

// Ahora vamos a ver una forma de desarrolar módulos dentro de Node, para eso vamos a necesitar de ciertas palabras reservadas:

// module.exports 

// Esto le esta diciendo a Node que nuestro archivo service.js es un módulo que va a ser exportado por lo tanto se puede utilizar en cualquier otro archivo

// Seguido de module.exports ponemos un igual y abrimos un objeto, este objeto va a contener las funciones que se van a encargar de manipular nuestros datos
// Recordar que un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad
// puede ser una función, en cuyo caso la propiedad es conocida como un método.

// La primera función que vamos a escribir va a ser la de getUsers (obtener los usuarios) 

// module.exports = {
//   getUsers: () => data
// }
// Vamos a hacer una prueba sencilla, ahora con el archivo service que se encuentra en la carpeta src.

// Gracias a que este archivo tiene module.exports vamos a poder exportar lo que esta dentro del objeto. Vamos a index.js



// Lo que sigue es agregar la función de crear usuario, es decir, vamos a poder crear un nuevo usuario. A parte de que
// podemos enviar todos los usarios existentes vamos a poder agregar un nuevo usuario.


// module.exports = {
//   getUsers: () => data,
//   createUser: (dataUser) => {
//     let newUser = {
//       id: data.length + 1,
//       ...dataUser
//     }

//     data.push(newUser)
//     return newUser // retorna el nuevo usuario creado 
//   }
// }

// Este método createUser va a recibir los datos del usuario. Este alamacenamiento de datos no va a persistir en el tiempo realmente.

// Una vez que trae de MOCK-DATA los datos lo que va a hacer es ir agregando nuevos usuarios a la variable "data", estos datos van a
// vivir en la memoria volatil, cuando cerremos el servidor y lo volvamos a iniciar va a suceder que los datos se han perdido y solo
// va a estar disponible lo que contiene inicialmente la variable "data".

// Recordar: el método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.



// Creamos la función para obtener solo un usuario

module.exports = {
  getUsers: () => data,
  getUser:(id) => {
    let identificador = Number(id);
    let user = data.filter(persona => {
      persona.id === identificador
    })[0];
    return user
  },
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser
    }

    data.push(newUser)
    return newUser // retorna el nuevo usuario creado 
  },
  modifyUser: (id, changeUser) => {
    let identificador = Number(id);
    let user = data.find(person => {
      return person.id === identificador
    })
    let updated = {
      id: user.id,
      ...changeUser
    }

    let targetIndex = data.indexOf(user);

    data.splice(targetIndex,1,updated)

    return updated 
  },
  deleteUser: (id) => {
    let identificador = Number(id);
    let user = data.find(person => {
      return person.id === identificador
    })

    let targetIndex = data.indexOf(user);

    data.splice(targetIndex, 1)

    return user;
  }
}

// getUser recibe un id y una cosa importante es recordar que los parámetros que nos llegan en la ruta siempre van a llegar como strings
// y en nuestro archivo MOCK-DATA tenemos que el id es un valor númerico por lo que lo primero que hacemos es pasar ese id a un valor númerico
// para ello usamos el objeto Number. El constructor Number contiene constantes y métodos para trabajar con números. Valores de otro tipo pueden
// ser convertidos a números usando la función Number().

// Posteriormente a esto lo que hacemos es un filter del array data. Recordar que La función filter permite filtrar los elementos de un array 
// y generar uno nuevo con todos los elementos que cumplen una determinada condición.  

// Vamos a index en donde ya tenemos todo ready.
