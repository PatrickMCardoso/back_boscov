const prisma = require('../../prisma/prismaClient');
const { NotFoundError } = require('../errors/exceptions');
const bcrypt = require('bcrypt');

const createUser = async (data) => {

  const existingUser = await prisma.usuario.findUnique({
    where: { email: data.email },
  });
  if (existingUser) {
    throw new Error('E-mail já cadastrado.');
  }

  data.dataNascimento = new Date(data.dataNascimento);

  return await prisma.usuario.create({ data });
};

const listUsers = async () => {
  return await prisma.usuario.findMany(); 
};

const getUserById = async (id) => {
  const user = await prisma.usuario.findFirst({
    where: {
      id: Number(id),
      status: 1,
    },
  });
  if (!user) {
    throw new NotFoundError('Usuário não encontrado.');
  }
  return user;
};

const updateUser = async (id, data) => {
  const user = await prisma.usuario.findUnique({ where: { id: Number(id) } });
  if (!user || user.status === 0) {
    throw new NotFoundError('Usuário não encontrado ou inativo.');
  }

  if (data.senha) {
    data.senha = await bcrypt.hash(data.senha, 10);
  }

  if (data.dataNascimento && typeof data.dataNascimento === "string") {
    data.dataNascimento = new Date(data.dataNascimento);
  }

  return await prisma.usuario.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteUser = async (id) => {
  const user = await prisma.usuario.findUnique({ where: { id: Number(id) } });
  if (!user || user.status === 0) {
    throw new NotFoundError('Usuário não encontrado ou já inativo.');
  }
  return await prisma.usuario.update({
    where: { id: Number(id) },
    data: { status: 0 },
  });
};

const reactivateUser = async (id) => {
  const user = await prisma.usuario.findUnique({ where: { id: Number(id) } });
  if (!user || user.status === 1) {
    throw new NotFoundError('Usuário não encontrado ou já ativo.');
  }
  return await prisma.usuario.update({
    where: { id: Number(id) },
    data: { status: 1 },
  });
};

const getUserByEmail = async (email) => {
  return await prisma.usuario.findUnique({
    where: { email },
  });
};

module.exports = {
  createUser,
  getUserByEmail,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
  reactivateUser,
};