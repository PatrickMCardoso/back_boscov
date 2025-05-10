const filmeService = require('../services/filmeService');
const { FilmeSchema, FilmeUpdateSchema } = require('../validations/filmeValidation');
const { BadRequestError, NotFoundError } = require('../middlewares/errorHandler');

const createFilme = async (req, res, next) => {
  try {
    const validated = FilmeSchema.parse(req.body);
    const filme = await filmeService.createFilme(validated);
    res.status(201).json(filme);
  } catch (error) {
    next(error);
  }
};

const listFilmes = async (req, res, next) => {
  try {
    const filmes = await filmeService.listFilmes();
    res.json(filmes);
  } catch (error) {
    next(error);
  }
};

const getFilmeById = async (req, res, next) => {
  try {
    const filme = await filmeService.getFilmeById(req.params.id);
    if (!filme) {
      throw new NotFoundError('Filme não encontrado.');
    }
    res.json(filme);
  } catch (error) {
    next(error);
  }
};

const updateFilme = async (req, res, next) => {
  try {
    const dadosAtualizados = FilmeUpdateSchema.parse(req.body);
    const filmeAtualizado = await filmeService.updateFilme(Number(req.params.id), dadosAtualizados);

    if (!filmeAtualizado) {
      throw new NotFoundError('Filme não encontrado.');
    }

    res.status(200).json(filmeAtualizado);
  } catch (error) {
    next(error);
  }
};

const deleteFilme = async (req, res, next) => {
  try {
    const filme = await filmeService.deleteFilme(req.params.id);
    if (!filme) {
      throw new NotFoundError('Filme não encontrado.');
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const reactivateFilme = async (req, res, next) => {
  try {
    const filme = await filmeService.reactivateFilme(req.params.id);
    if (!filme) {
      throw new NotFoundError('Filme não encontrado ou já está ativo.');
    }
    res.json(filme);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFilme,
  listFilmes,
  getFilmeById,
  updateFilme,
  deleteFilme,
  reactivateFilme,
};
