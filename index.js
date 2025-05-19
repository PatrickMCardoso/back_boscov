const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const { errorHandler } = require('./src/middlewares/errorHandler');
const { globalRateLimiter } = require('./src/middlewares/rateLimiter');

const usuariosRoutes = require('./src/routes/usuariosRoutes');
const filmesRoutes = require('./src/routes/filmesRoutes');
const avaliacoesRoutes = require('./src/routes/avaliacaoRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.json());
app.use(globalRateLimiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(usuariosRoutes);
app.use(filmesRoutes);
app.use(avaliacoesRoutes);
app.use(authRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});