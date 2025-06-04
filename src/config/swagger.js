const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Filmes - Boscov',
      version: '1.0.0',
      description: 'Esta documentação tem como objetivo apresentar as funcionalidades das APIs do sistema de Filmes Boscov.',
    },
    servers: [
      {
        url: 'http://localhost:3030',
      },
    ],
  },
  apis: ['./src/docs/*.swagger.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
