const avaliacaoService = require('../services/avaliacaoService');
const { AvaliacaoSchema, AvaliacaoUpdateSchema } = require('../validations/avaliacaoValidation');

const createAvaliacao = async (req, res, next) => {
  try {
    const validated = AvaliacaoSchema.parse(req.body);
    const avaliacao = await avaliacaoService.createAvaliacao(validated);
    res.status(201).json(avaliacao);
  } catch (error) {
    next(error);
  }
};

const getAvaliacoesByUsuario = async (req, res, next) => {
  try {
    const avaliacoes = await avaliacaoService.getAvaliacoesByUsuario(req.params.idUsuario);
    res.json(avaliacoes);
  } catch (error) {
    next(error);
  }
};

const getAvaliacoesByFilme = async (req, res, next) => {
  try {
    const avaliacoes = await avaliacaoService.getAvaliacoesByFilme(req.params.idFilme);
    res.json(avaliacoes);
  } catch (error) {
    next(error);
  }
};

const updateAvaliacao = async (req, res, next) => {
  try {
    const validated = AvaliacaoUpdateSchema.parse(req.body);
    const { idUsuario, idFilme } = req.params;
    const avaliacaoAtualizada = await avaliacaoService.updateAvaliacao({ idUsuario, idFilme }, validated);
    res.status(200).json(avaliacaoAtualizada);
  } catch (error) {
    next(error);
  }
};

const deleteAvaliacao = async (req, res, next) => {
  try {
    const { idUsuario, idFilme } = req.params;
    await avaliacaoService.deleteAvaliacao({ idUsuario, idFilme });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAvaliacao,
  getAvaliacoesByUsuario,
  getAvaliacoesByFilme,
  updateAvaliacao,
  deleteAvaliacao,
};