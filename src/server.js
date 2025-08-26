const express = require('express');
const fileUpload = require('express-fileupload');
const { sequelize } = require('./config/postgres');
const Routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(fileUpload());
Routes(app);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados!');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco:', err);
  });
