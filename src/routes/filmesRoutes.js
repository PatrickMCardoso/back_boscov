const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeAdmin } = require('../middlewares/auth');
const { createFilme, listFilmes, getFilmeById, updateFilme, deleteFilme, reactivateFilme, searchFilmes } = require('../controllers/filmesController');

// Rotas protegidas 
router.post('/filme', authenticateUser, authorizeAdmin, createFilme);
router.put('/filme/:id', authenticateUser, authorizeAdmin, updateFilme);
router.delete('/filme/:id', authenticateUser, authorizeAdmin, deleteFilme);
router.patch('/filme/:id/reativar', authenticateUser, authorizeAdmin, reactivateFilme);

// Rotas públicas
router.get('/filmes', listFilmes);
router.get('/filme/:id', getFilmeById);
router.get('/filmes/search', searchFilmes);

module.exports = router;