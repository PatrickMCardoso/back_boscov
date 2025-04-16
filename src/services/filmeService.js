const prisma = require('../../prisma/prismaClient');

const createFilme = async (data) => {
  return await prisma.filme.create({ data });
};

const listFilmes = async () => {
  return await prisma.filme.findMany({
    where: { status: 1 },
  });
};

const getFilmeById = async (id) => {
  return await prisma.filme.findUnique({ where: { id: Number(id) } });
};

const updateFilme = async (id, data) => {
  return await prisma.filme.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteFilme = async (id) => {
  return await prisma.filme.update({
    where: { id: Number(id) },
    data: { status: 0 },
  });
};

const reactivateFilme = async (id) => {
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
  reactivateFilme
};
