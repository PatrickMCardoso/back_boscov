const filmeService = require('../services/filmeService');

const createFilme = async (req, res) => {
  try {
    const filme = await filmeService.createFilme(req.body);
    res.status(201).json(filme);
  } catch (error) {
    res.status(400).json({ error: 'Error creating movie.' });
  }
};

const listFilmes = async (req, res) => {
  try {
    const filmes = await filmeService.listFilmes();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies.' });
  }
};

const getFilmeById = async (req, res) => {
  try {
    const filme = await filmeService.getFilmeById(req.params.id);
    if (!filme) return res.status(404).json({ error: 'Movie not found.' });
    res.json(filme);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movie.' });
  }
};

const updateFilme = async (req, res) => {
  try {
    const updatedFilme = await filmeService.updateFilme(req.params.id, req.body);
    res.json(updatedFilme);
  } catch (error) {
    res.status(400).json({ error: 'Error updating movie.' });
  }
};

const deleteFilme = async (req, res) => {
  try {
    await filmeService.deleteFilme(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting movie.' });
  }
};

const reactivateFilme = async (req, res) => {
  try {
    const filme = await filmeService.reactivateFilme(req.params.id);
    res.json(filme);
  } catch (error) {
    res.status(400).json({ error: 'Error reactivating movie.' });
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
