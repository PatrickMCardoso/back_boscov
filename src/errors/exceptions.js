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
  
  module.exports = {
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
  };