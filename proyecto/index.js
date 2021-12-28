const express = require('express');
const debug = require('debug')('app:main');

const {Config} = require('./src/config/index') // requerimos objeto de configuración

const app = express();

app.use(express.json())

app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`)
})

// En app.listen ya no vamos a usar console.log() como lo veniamos haciendo, sino que se utilizará el paquete 
// que instalamos que es "debug" que actuará como console.log 

// Recordar que app.use(express.json()) básicamente, es un middleware para analizar JSON, texto sin formato o simplemente devolver un objeto.