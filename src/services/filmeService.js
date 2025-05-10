const prisma = require('../../prisma/prismaClient');
const { NotFoundError } = require('../middlewares/errorHandler');

const createFilme = async (data) => {
  return await prisma.filme.create({ data });
};

const listFilmes = async () => {
  return await prisma.filme.findMany({
    where: { status: 1 },
  });
};

const getFilmeById = async (id) => {
  return await prisma.filme.findFirst({
    where: {
      id: Number(id),
      status: 1,
    },
  });
};

const updateFilme = async (id, data) => {
  const filme = await prisma.filme.findUnique({ where: { id } });
  if (!filme || filme.status === 0) {
    return null;
  }

  return await prisma.filme.update({
    where: { id },
    data,
  });
};

const deleteFilme = async (id) => {
  const filme = await prisma.filme.findUnique({ where: { id: Number(id) } });
  if (!filme || filme.status === 0) {
    return null;
  }

  return await prisma.filme.update({
    where: { id: Number(id) },
    data: { status: 0 },
  });
};

const reactivateFilme = async (id) => {
  const filme = await prisma.filme.findUnique({ where: { id: Number(id) } });
  if (!filme || filme.status === 1) {
    return null;
  }

  return await prisma.filme.update({
    where: { id: Number(id) },
    data: { status: 1 },
  });
};

module.exports = {
  createFilme,
  listFilmes,
  getFilmeById,
  updateFilme,
  deleteFilme,
  reactivateFilme,
};
