require('dotenv').config()

module.exports.Config = {
  port: process.env.PORT
} 

// module.exports siempre retorna un objeto. A esto podemos agregarle una propiedad, en este caso la llamamos 'Config'
// que sería la clave de la propiedad y como valor le agregamos un objeto. Ahora el objeto de Config que va a ser exportado 
// de este archivo va a tener las variables de entorno.
// Accedemos a las variables de entorno que se encuentran en el archivo .env
// mediante 'process' (que es el proceso en el que se ejecuta Node) más '.env'. De esta forma accedemos a las variables de entorno de ese proceso 
// de Node y por último ponemos '.PORT', en este caso ya accedes al nombre de la variable en .env

// De esta manera estamos trayendo nuestras variables del archivo .env a nuestro archivo de configuración, pero lo hacemos gracias al paquete de dotenv
// el mismo lo que hace es buscar el archivo .env en la raíz del proyecto y posteriormente va a cargar esas variables en process.env (el entorno/environment
// del proceso actual)

// Esta variable inical que tenemos la vamos a implementar en el archivo principal.