const prisma = require('../../prisma/prismaClient');
const { NotFoundError } = require('../errors/exceptions');

const createAvaliacao = async (data) => {
  return await prisma.avaliacao.create({ data });
};

const getAvaliacoesByUsuario = async (idUsuario) => {
  const avaliacoes = await prisma.avaliacao.findMany({
    where: { idUsuario: Number(idUsuario), status: 1 },
    include: { filme: true },
  });
  if (avaliacoes.length === 0) {
    throw new NotFoundError('Nenhuma avaliação encontrada para este usuário.');
  }
  return avaliacoes;
};

const getAvaliacoesByFilme = async (idFilme) => {
  const avaliacoes = await prisma.avaliacao.findMany({
    where: { idFilme: Number(idFilme), status: 1 },
    include: { usuario: true },
  });
  if (avaliacoes.length === 0) {
    throw new NotFoundError('Nenhuma avaliação encontrada para este filme.');
  }
  return avaliacoes;
};

const updateAvaliacao = async (id, data) => {
  const avaliacao = await prisma.avaliacao.findUnique({ where: { id: Number(id) } });
  if (!avaliacao || avaliacao.status === 0) {
    throw new NotFoundError('Avaliação não encontrada ou inativa.');
  }

  return await prisma.avaliacao.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteAvaliacao = async (id) => {
  const avaliacao = await prisma.avaliacao.findUnique({ where: { id: Number(id) } });
  if (!avaliacao || avaliacao.status === 0) {
    throw new NotFoundError('Avaliação não encontrada ou já inativa.');
  }

  return await prisma.avaliacao.update({
    where: { id: Number(id) },
    data: { status: 0 },
  });
};

module.exports = {
  createAvaliacao,
  getAvaliacoesByUsuario,
  getAvaliacoesByFilme,
  updateAvaliacao,
  deleteAvaliacao,
};