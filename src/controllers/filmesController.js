const filmeService = require('../services/filmeService');
const { FilmeSchema, FilmeUpdateSchema } = require('../validations/filmeValidation');

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
    res.json(filme);
  } catch (error) {
    next(error);
  }
};

const updateFilme = async (req, res, next) => {
  try {
    const validated = FilmeUpdateSchema.parse(req.body);
    const filmeAtualizado = await filmeService.updateFilme(req.params.id, validated);
    res.status(200).json(filmeAtualizado);
  } catch (error) {
    next(error);
  }
};

const deleteFilme = async (req, res, next) => {
  try {
    await filmeService.deleteFilme(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const reactivateFilme = async (req, res, next) => {
  try {
    const filme = await filmeService.reactivateFilme(req.params.id);
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