const rateLimit = require('express-rate-limit');

// Middleware de Rate Limiting para o login
const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Limita a 5 tentativas por IP
  message: {
    error: 'Muitas tentativas de login. Tente novamente após 15 minutos.',
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});

// Middleware de Rate Limiting global (opcional)
const globalRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 100, // Limita a 100 requisições por IP
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