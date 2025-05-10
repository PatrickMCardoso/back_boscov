const { ZodError } = require('zod');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}

class UnauthorizedError extends Error {
    constructor(message = 'Não autorizado') {
      super(message);
      this.name = 'UnauthorizedError';
      this.statusCode = 401;
    }
  }

const errorHandler = (err, req, res, next) => {
  // Verifica se o erro é do Zod
  if (err instanceof ZodError) {
    const validationErrors = err.errors.map((e) => e.message).join(', ');
    return res.status(400).json({ error: `Erro de validação: ${validationErrors}` });
  }

  // Verifica se o erro é uma exceção personalizada
  if (err instanceof BadRequestError || err instanceof NotFoundError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Caso contrário, trata como um erro genérico
  console.error(err); // Log do erro para depuração
  res.status(500).json({ error: 'Erro interno do servidor.' });
};

module.exports = {
  errorHandler,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
};