const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const { errorHandler } = require('./src/middlewares/errorHandler');

const usuariosRoutes = require('./src/routes/usuarios');
const filmesRoutes = require('./src/routes/filmes');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(usuariosRoutes);
app.use(filmesRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
