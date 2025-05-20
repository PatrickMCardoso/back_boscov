const express = require('express');
const router = express.Router();
const { createFilme, listFilmes, getFilmeById, updateFilme, deleteFilme, reactivateFilme, searchFilmes } = require('../controllers/filmesController');

router.post('/filme', createFilme);
router.get('/filmes', listFilmes);
router.get('/filme/:id', getFilmeById);
router.put('/filme/:id', updateFilme);
router.delete('/filme/:id', deleteFilme);
router.patch('/filme/:id/reativar', reactivateFilme);
router.get('/filmes/search', searchFilmes);

module.exports = router;
