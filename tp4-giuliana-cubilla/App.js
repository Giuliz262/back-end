// Importar los módulos necesarios
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que la aplicación escuchará las peticiones
const port = 6000;

// Configurar los middlewares
app.use(helmet()); // Middleware de seguridad
app.use(cors()); // Middleware para permitir solicitudes de diferentes dominios
app.use(morgan('combined')); // Middleware para el registro de solicitudes en la consola
app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes en formato JSON

// Configurar las rutas de la aplicación
app.use("/", require('./routes/routes'));

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
