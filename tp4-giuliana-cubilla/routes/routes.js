// Importar el módulo 'express'
const express = require("express");

// Crear una instancia de un enrutador de express
const routes = express.Router();

// Importar el objeto 'controllers' desde el archivo '../controllers/controllers'
const controllers = require("../controllers/controllers");

// Definir una ruta GET que manejará la raíz ("/") de la aplicación
routes.get('/', controllers.Pget);

// Definir una ruta POST que manejará la ruta "/ruta-post" de la aplicación
routes.post('/ruta-post', controllers.Ppost);

// Definir una ruta PUT que manejará la ruta "/ruta-put" de la aplicación
routes.put('/ruta-put', controllers.Pput);

// Definir una ruta DELETE que manejará la ruta "/ruta-delete" de la aplicación
routes.delete('/ruta-delete', controllers.Pdelete);

// Exportar el enrutador para que pueda ser utilizado en otros archivos
module.exports = routes;


