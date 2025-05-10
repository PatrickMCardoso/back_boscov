const usuarioService = require('../services/usuarioService');
const { UsuarioSchema, UsuarioUpdateSchema } = require('../validations/usuarioValidation');
const { NotFoundError } = require('../middlewares/errorHandler');

const createUser = async (req, res, next) => {
  try {
    const validated = UsuarioSchema.parse(req.body);
    const usuario = await usuarioService.createUser(validated);
    res.status(201).json(usuario);
  } catch (error) {
    next(error); // vai para o errorHandler
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
    if (!user) throw new NotFoundError('Usuário não encontrado.');
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const dadosAtualizados = UsuarioUpdateSchema.parse(req.body);
    const usuarioAtualizado = await usuarioService.updateUser(Number(id), dadosAtualizados);

    if (!usuarioAtualizado) throw new NotFoundError('Usuário não encontrado.');
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deleted = await usuarioService.deleteUser(req.params.id);
    if (!deleted) throw new NotFoundError('Usuário não encontrado para exclusão.');
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const reactivateUser = async (req, res, next) => {
  try {
    const reactivated = await usuarioService.reactivateUser(req.params.id);
    if (!reactivated) throw new NotFoundError('Usuário não encontrado para reativação.');
    res.json(reactivated);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
  reactivateUser
};
