const express = require('express');
const router = express.Router();
const { createFilme, listFilmes, getFilmeById, updateFilme, deleteFilme, reactivateFilme } = require('../controllers/filmesController');

router.post('/filme', createFilme);
router.get('/filmes', listFilmes);
router.get('/filme/:id', getFilmeById);
router.put('/filme/:id', updateFilme);
router.delete('/filme/:id', deleteFilme);
router.patch('/filme/:id/reativar', reactivateFilme);

module.exports = router;
