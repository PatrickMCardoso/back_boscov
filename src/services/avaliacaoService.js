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

    return await prisma.avaliacao.create({ data });
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

const updateAvaliacao = async (id, data) => {
    const avaliacao = await prisma.avaliacao.findUnique({
        where: { id: Number(id) },
        include: {
            usuario: true,
            filme: true,
        },
    });

    if (!avaliacao || avaliacao.usuario.status === 0 || avaliacao.filme.status === 0) {
        throw new NotFoundError('Avaliação não encontrada ou associada a um usuário ou filme inativo.');
    }

    return await prisma.avaliacao.update({
        where: { id: Number(id) },
        data,
    });
};

const deleteAvaliacao = async (id) => {
    const avaliacao = await prisma.avaliacao.findUnique({
        where: { id: Number(id) },
        include: {
            usuario: true,
            filme: true,
        },
    });

    if (!avaliacao || avaliacao.usuario.status === 0 || avaliacao.filme.status === 0) {
        throw new NotFoundError('Avaliação não encontrada ou associada a um usuário ou filme inativo.');
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