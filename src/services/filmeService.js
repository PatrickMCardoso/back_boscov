const prisma = require('../../prisma/prismaClient');
const { NotFoundError } = require('../errors/exceptions');

const createFilme = async (data) => {
  return await prisma.filme.create({ data });
};

const listFilmes = async () => {
  return await prisma.filme.findMany({
    where: { status: 1 },
  });
};

const getFilmeById = async (id) => {
  const filme = await prisma.filme.findFirst({
    where: {
      id: Number(id),
      status: 1,
    },
  });
  if (!filme) {
    throw new NotFoundError('Filme não encontrado.');
  }
  return filme;
};

const updateFilme = async (id, data) => {
  const filme = await prisma.filme.findUnique({ where: { id: Number(id) } });
  if (!filme || filme.status === 0) {
    throw new NotFoundError('Filme não encontrado ou inativo.');
  }

  return await prisma.filme.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteFilme = async (id) => {
  const filme = await prisma.filme.findUnique({ where: { id: Number(id) } });
  if (!filme || filme.status === 0) {
    throw new NotFoundError('Filme não encontrado ou já inativo.');
  }

  return await prisma.filme.update({
    where: { id: Number(id) },
    data: { status: 0 },
  });
};

const reactivateFilme = async (id) => {
  const filme = await prisma.filme.findUnique({ where: { id: Number(id) } });
  if (!filme || filme.status === 1) {
    throw new NotFoundError('Filme não encontrado ou já ativo.');
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