const prisma = require('../../prisma/prismaClient');
const { NotFoundError } = require('../errors/exceptions');

const createAvaliacao = async (data) => {
  const usuario = await prisma.usuario.findFirst({
    where: { id: data.idUsuario, status: 1 },
  });
  if (!usuario) {
    throw new NotFoundError('Usuário não encontrado ou inativo.');
  }

  const filme = await prisma.filme.findFirst({
    where: { id: data.idFilme, status: 1 },
  });
  if (!filme) {
    throw new NotFoundError('Filme não encontrado ou inativo.');
  }

  // upsert: se já existe, faz update; se não, faz create
  const avaliacao = await prisma.avaliacao.upsert({
    where: {
      idUsuario_idFilme: {
        idUsuario: data.idUsuario,
        idFilme: data.idFilme,
      }
    },
    update: {
      nota: data.nota,
      comentario: data.comentario,
    },
    create: {
      idUsuario: data.idUsuario,
      idFilme: data.idFilme,
      nota: data.nota,
      comentario: data.comentario,
    }
  });

  // Recalcula a média de avaliações do filme
  await recalculateMediaAvaliacoes(data.idFilme);

  return avaliacao;
};

const getAllAvaliacoes = async () => {
  return await prisma.avaliacao.findMany({
    include: {
      usuario: true,
      filme: true,
    },
  });
};

const getAvaliacoesByUsuario = async (idUsuario) => {
  const avaliacoes = await prisma.avaliacao.findMany({
    where: {
      idUsuario: Number(idUsuario),
    },
    include: {
      filme: true,
    },
  });

  if (avaliacoes.length === 0) {
    throw new NotFoundError('Nenhuma avaliação encontrada para este usuário.');
  }

  return avaliacoes;
};

const getAvaliacoesByFilme = async (idFilme) => {
  const avaliacoes = await prisma.avaliacao.findMany({
    where: {
      idFilme: Number(idFilme),
      usuario: {
        status: 1,
      },
    },
    include: {
      usuario: true,
    },
  });

  if (avaliacoes.length === 0) {
    throw new NotFoundError('Nenhuma avaliação encontrada para este filme.');
  }

  return avaliacoes;
};

const updateAvaliacao = async ({ idUsuario, idFilme }, data) => {
  const avaliacao = await prisma.avaliacao.findUnique({
    where: { idUsuario_idFilme: { idUsuario: Number(idUsuario), idFilme: Number(idFilme) } },
    include: {
      usuario: true,
      filme: true,
    },
  });

  if (!avaliacao || avaliacao.usuario.status === 0 || avaliacao.filme.status === 0) {
    throw new NotFoundError('Avaliação não encontrada ou associada a um usuário ou filme inativo.');
  }

  const updatedAvaliacao = await prisma.avaliacao.update({
    where: { idUsuario_idFilme: { idUsuario: Number(idUsuario), idFilme: Number(idFilme) } },
    data,
  });

  await recalculateMediaAvaliacoes(avaliacao.idFilme);

  return updatedAvaliacao;
};

const deleteAvaliacao = async ({ idUsuario, idFilme }) => {
  const avaliacao = await prisma.avaliacao.findUnique({
    where: { idUsuario_idFilme: { idUsuario: Number(idUsuario), idFilme: Number(idFilme) } },
    include: {
      usuario: true,
      filme: true,
    },
  });

  if (!avaliacao || avaliacao.usuario.status === 0 || avaliacao.filme.status === 0) {
    throw new NotFoundError('Avaliação não encontrada ou associada a um usuário ou filme inativo.');
  }

  await prisma.avaliacao.delete({
    where: { idUsuario_idFilme: { idUsuario: Number(idUsuario), idFilme: Number(idFilme) } },
  });

  const media = await recalculateMediaAvaliacoes(avaliacao.idFilme);

  return media;
};

const recalculateMediaAvaliacoes = async (idFilme) => {
  const media = await prisma.avaliacao.aggregate({
    where: { idFilme },
    _avg: { nota: true },
  });

  await prisma.filme.update({
    where: { id: idFilme },
    data: { mediaAvaliacoes: media._avg.nota || 0 },
  });

  return media._avg.nota || 0;
};

module.exports = {
  createAvaliacao,
  getAllAvaliacoes,
  getAvaliacoesByUsuario,
  getAvaliacoesByFilme,
  updateAvaliacao,
  deleteAvaliacao,
  recalculateMediaAvaliacoes,
};