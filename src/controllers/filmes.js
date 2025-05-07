const filmeService = require('../services/filmeService');
const { FilmeSchema, FilmeUpdateSchema  } = require('../validations/filmeValidation');

const createFilme = async (req, res) => {
  try {
    const validated = FilmeSchema.parse(req.body);
    const filme = await filmeService.createFilme(validated);
    res.status(201).json(filme);
  } catch (error) {
    res.status(400).json({ error: error.errors || 'Erro ao criar filme.' });
  }
};

const listFilmes = async (req, res) => {
  try {
    const filmes = await filmeService.listFilmes();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ error: error.errors || 'Erro ao buscar filmes.' });
  }
};

const getFilmeById = async (req, res) => {
  try {
    const filme = await filmeService.getFilmeById(req.params.id);
    if (!filme) return res.status(404).json({ error: 'Filme não encontrado.' });
    res.json(filme);
  } catch (error) {
    res.status(500).json({ error: error.errors || 'Erro ao buscar filme.' });
  }
};

const updateFilme = async (req, res) => {
  const { id } = req.params;

  try {
    const dadosAtualizados = FilmeUpdateSchema.parse(req.body);

    const filmeAtualizado = await filmeService.updateFilme(Number(id), dadosAtualizados);

    if (!filmeAtualizado) {
      return res.status(404).json({ erro: 'Filme não encontrado.' });
    }

    res.status(200).json(filmeAtualizado);
  } catch (error) {
    if (error.name === 'ZodError') {
      const errosFormatados = error.errors.map((err) => err.message);
      return res.status(400).json({ erros: errosFormatados });
    }

    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar o filme.' });
  }
};

const deleteFilme = async (req, res) => {
  try {
    await filmeService.deleteFilme(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.errors || 'Erro ao deletar filme.' });
  }
};

const reactivateFilme = async (req, res) => {
  try {
    const filme = await filmeService.reactivateFilme(req.params.id);
    res.json(filme);
  } catch (error) {
    res.status(400).json({ error: error.errors || 'Erro ao reativar filme.' });
  }
};

module.exports = {
  createFilme,
  listFilmes,
  getFilmeById,
  updateFilme,
  deleteFilme,
  reactivateFilme
};
