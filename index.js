const express = require('express');
const app = express();
const usuariosRoutes = require('./src/routes/usuarios');
const filmesRoutes = require('./src/routes/filmes');

app.use(express.json());
app.use(usuariosRoutes);
app.use(filmesRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
