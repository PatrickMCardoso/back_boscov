const rateLimit = require('express-rate-limit');

// Middleware de Rate Limiting para o login
const loginRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, 
  max: 5, 
  message: {
    error: 'Muitas tentativas de login. Tente novamente após 5 minutos.',
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});

// Middleware de Rate Limiting global
const globalRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 100, 
  message: {
    error: 'Muitas requisições. Tente novamente mais tarde.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  loginRateLimiter,
  globalRateLimiter,
};