const express = require('express');
const app = express();
const usuariosRoutes = require('./src/routes/usuarios');

app.use(express.json());
app.use(usuariosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});