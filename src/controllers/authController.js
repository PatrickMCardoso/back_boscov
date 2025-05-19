const bcrypt = require('bcrypt');
const { generateToken } = require('../config/jwtConfig');
const usuarioService = require('../services/usuarioService');

const loginUser = async (req, res, next) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    const user = await usuarioService.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = generateToken({ id: user.id, email: user.email, tipoUsuario: user.tipoUsuario });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
};