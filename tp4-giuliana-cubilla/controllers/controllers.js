const controllers = {
}

controllers.Pget = (req, res) => {
    res.send('Respondiendo a la petición GET');
  };
  
  controllers.Ppost = (req, res) => {
    res.send('Respondiendo a la petición POST');
  };
  
  controllers.Pput = (req, res) => {
    res.send('Respondiendo a la petición PUT');
  };
  
  controllers.Pdelete = (req, res) => {
    res.send('Respondiendo a la petición DELETE');
  };

  module.exports = controllers;