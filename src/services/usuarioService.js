const prisma = require('../../prisma/prismaClient');

const createUser = async (data) => {
  return await prisma.usuario.create({ data });
};

const listUsers = async () => {
  return await prisma.usuario.findMany({
    where: { status: 1 },
  });
};

const getUserById = async (id) => {
  return await prisma.usuario.findFirst({
    where: {
      id: Number(id), 
      status: 1,
    },
  });
};

const updateUser = async (id, data) => {
  return await prisma.usuario.update({
    where: { id: Number(id) }, 
    data,
  });
};

const deleteUser = async (id) => {
  return await prisma.usuario.update({
    where: { id: Number(id) }, 
    data: { status: 0 },
  });
};

const reactivateUser = async (id) => {
  return await prisma.usuario.update({
    where: { id: Number(id) }, 
    data: { status: 1 },
  });
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
  reactivateUser,
};