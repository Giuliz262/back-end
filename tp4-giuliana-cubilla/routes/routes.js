const express = require("express");
const routes = express.Router();

const controllers = require("../controllers/controllers");

routes.get('/ruta-get', controllers.Pget);
routes.post('/ruta-post', controllers.Ppost);
routes.put('/ruta-put', controllers.Pput);
routes.delete('/ruta-delete', controllers.Pdelete);

module.exports = routes;
