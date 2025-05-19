const { ZodError } = require('zod');
const { NotFoundError, BadRequestError, UnauthorizedError, ForbiddenError } = require('../errors/exceptions');

const errorHandler = (err, req, res, next) => {
  // Verifica se o erro é do Zod
  if (err instanceof ZodError) {
    const validationErrors = err.errors.map((e) => e.message).join(', ');
    return res.status(400).json({ error: `Erro de validação: ${validationErrors}` });
  }

  // Verifica se o erro é uma exceção personalizada
  if (err instanceof BadRequestError || err instanceof NotFoundError || err instanceof UnauthorizedError || err instanceof ForbiddenError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Caso contrário, trata como um erro genérico
  console.error(err); // Log do erro para depuração
  res.status(500).json({ error: 'Erro interno do servidor.' });
};

module.exports = { errorHandler };