const { ZodError } = require('zod');
const { NotFoundError, BadRequestError, UnauthorizedError, ForbiddenError } = require('../errors/exceptions');

const errorHandler = (err, req, res, next) => {
 
  if (err instanceof ZodError) {
    const validationErrors = err.errors.map((e) => e.message).join(', ');
    return res.status(400).json({ error: `Erro de validação: ${validationErrors}` });
  }

  if (err instanceof BadRequestError || err instanceof NotFoundError || err instanceof UnauthorizedError || err instanceof ForbiddenError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err); 
  res.status(500).json({ error: 'Erro interno do servidor.' });
};

module.exports = { errorHandler };