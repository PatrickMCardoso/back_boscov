const userService = require('../services/usuarioService');
const { UsuarioSchema, UsuarioUpdateSchema } = require('../validations/usuarioValidation');

const createUser = async (req, res) => {
  try {
    const validated = UsuarioSchema.parse(req.body);
    const usuario = await usuarioService.createUser(validated);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.errors || 'Erro ao criar usuário.' });
  }
};

const listUsers = async (req, res) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.errors || 'Erro ao buscar usuários.' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário nao encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.errors || 'Erro ao buscar usuário.' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const dadosAtualizados = UsuarioUpdateSchema.parse(req.body);

    const usuarioAtualizado = await usuarioService.updateUser(Number(id), dadosAtualizados);

    if (!usuarioAtualizado) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    if (error.name === 'ZodError') {
      const errosFormatados = error.errors.map((err) => err.message);
      return res.status(400).json({ erros: errosFormatados });
    }

    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar o usuário.' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.errors || 'Erro ao deletar usuário.' });
  }
};

const reactivateUser = async (req, res) => {
  try {
    const reactivated = await userService.reactivateUser(req.params.id);
    res.json(reactivated);
  } catch (error) {
    res.status(400).json({ error: error.errors || 'Erro ao reativar usuário.' });
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