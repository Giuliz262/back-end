// Creación de un objeto llamado 'controllers'
const controllers = {};

// Definición de una función para manejar la petición GET
controllers.Pget = (req, res) => {
    res.send('Respondiendo a la petición GET');
};

// Definición de una función para manejar la petición POST
controllers.Ppost = (req, res) => {
    res.send('Respondiendo a la petición POST');
};

// Definición de una función para manejar la petición PUT
controllers.Pput = (req, res) => {
    res.send('Respondiendo a la petición PUT');
};

// Definición de una función para manejar la petición DELETE
controllers.Pdelete = (req, res) => {
    res.send('Respondiendo a la petición DELETE');
};

// Exportación del objeto controllers para que pueda ser utilizado en otros archivos
module.exports = controllers;