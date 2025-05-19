const { verifyToken } = require('../config/jwtConfig');
const { ForbiddenError } = require('../errors/exceptions');

// Middleware para autenticar o usuário
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Armazena os dados do usuário no objeto req
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
};

// Middleware para permitir acesso apenas para tipoUsuario=admin
const authorizeAdmin = (req, res, next) => {
  if (req.user.tipoUsuario !== 'admin') {
    throw new ForbiddenError('Apenas administradores podem acessar esta rota.');
  }
  next();
};

// Middleware para permitir acesso para tipoUsuario=admin ou tipoUsuario=comum
const authorizeAdminOrComum = (req, res, next) => {
  if (req.user.tipoUsuario !== 'admin' && req.user.tipoUsuario !== 'comum') {
    throw new ForbiddenError('Apenas administradores ou usuários comuns podem acessar esta rota.');
  }
  next();
};

module.exports = {
  authenticateUser,
  authorizeAdmin,
  authorizeAdminOrComum,
};