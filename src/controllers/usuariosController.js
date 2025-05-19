const bcrypt = require('bcrypt'); 
const usuarioService = require('../services/usuarioService');
const { UsuarioSchema, UsuarioUpdateSchema } = require('../validations/usuarioValidation');

const createUser = async (req, res, next) => {
  try {
    const validated = UsuarioSchema.parse(req.body);
    const senhaCriptografada = await bcrypt.hash(validated.senha, 10);
    validated.senha = senhaCriptografada;

    const user = await usuarioService.createUser(validated);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const listUsers = async (req, res, next) => {
  try {
    const users = await usuarioService.listUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await usuarioService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const validated = UsuarioUpdateSchema.parse(req.body);
    const user = await usuarioService.updateUser(req.params.id, validated); 
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await usuarioService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const reactivateUser = async (req, res, next) => {
  try {
    const user = await usuarioService.reactivateUser(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
  reactivateUser,
};