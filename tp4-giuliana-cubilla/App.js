const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const express = require('express');

const app = express();
const port = 6000;

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use("/",require('./routes/routes'))

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

