const prisma = require('../../prisma/prismaClient');
const { NotFoundError } = require('../errors/exceptions');

const createFilme = async (data) => {
  const { generoIds, ...filmeData } = data;

  const existingFilme = await prisma.filme.findFirst({
    where: { nome: filmeData.nome },
  });
  if (existingFilme) {
    throw new Error('Já existe um filme com este nome.');
  }

  // Cria o filme
  const filme = await prisma.filme.create({ data: filmeData });

  // Cria os vínculos em GeneroFilme
  if (Array.isArray(generoIds)) {
    await Promise.all(
      generoIds.map(idGenero =>
        prisma.generoFilme.create({
          data: {
            idGenero,
            idFilme: filme.id,
          }
        })
      )
    );
  }

  // Retorna o filme já com os gêneros vinculados
  return await prisma.filme.findUnique({
    where: { id: filme.id },
    include: {
      generos: { include: { genero: true } }
    }
  });
};

const listFilmes = async () => {
  return await prisma.filme.findMany({
    include: {
      generos: {
        include: {
          genero: true,
        },
      },
    },
  });
};

const getFilmeById = async (id) => {
  const filme = await prisma.filme.findFirst({
    where: {
      id: Number(id),
      status: 1,
    },
    include: {
      generos: {
        include: {
          genero: true,
        },
      },
    },
  });
  if (!filme) {
    throw new NotFoundError('Filme não encontrado.');
  }

  // Calcula a média das avaliações
  const avaliacoes = await prisma.avaliacao.findMany({
    where: { idFilme: Number(id) }
  });
  const mediaAvaliacoes = avaliacoes.length
    ? avaliacoes.reduce((acc, cur) => acc + cur.nota, 0) / avaliacoes.length
    : null;

  // Adiciona a média ao objeto retornado
  return {
    ...filme,
    mediaAvaliacoes: mediaAvaliacoes !== null ? Number(mediaAvaliacoes.toFixed(2)) : null,
  };
};

const updateFilme = async (id, data) => {
  const { generoIds, ...filmeData } = data;

  const filme = await prisma.filme.findUnique({ where: { id: Number(id) } });
  if (!filme || filme.status === 0) {
    throw new NotFoundError('Filme não encontrado ou inativo.');
  }

  // Atualiza dados do filme
  const filmeAtualizado = await prisma.filme.update({
    where: { id: Number(id) },
    data: filmeData,
  });

  // Atualiza os vínculos de gêneros
  if (Array.isArray(generoIds)) {

    await prisma.generoFilme.deleteMany({ where: { idFilme: filmeAtualizado.id } });

    await Promise.all(
      generoIds.map(idGenero =>
        prisma.generoFilme.create({
          data: {
            idGenero,
            idFilme: filmeAtualizado.id,
          }
        })
      )
    );
  }


  return await prisma.filme.findUnique({
    where: { id: filmeAtualizado.id },
    include: {
      generos: { include: { genero: true } }
    }
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

const searchFilmesByName = async (nome) => {
  return await prisma.filme.findMany({
    where: {
      nome: {
        contains: nome,
        mode: 'insensitive',
      },
      status: 1,
    },
    orderBy: {
      nome: 'asc',
    },
    include: {
      generos: {
        include: {
          genero: true,
        },
      },
    },
  });
};

module.exports = {
  createFilme,
  listFilmes,
  getFilmeById,
  updateFilme,
  deleteFilme,
  reactivateFilme,
  searchFilmesByName,
};