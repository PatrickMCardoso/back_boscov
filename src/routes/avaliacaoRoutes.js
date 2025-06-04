const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.post('/avaliacao', avaliacaoController.createAvaliacao);
router.get('/avaliacoes', avaliacaoController.getAllAvaliacoes);
router.get('/avaliacoes/usuario/:idUsuario', avaliacaoController.getAvaliacoesByUsuario);
router.get('/avaliacoes/filme/:idFilme', avaliacaoController.getAvaliacoesByFilme);
router.put('/avaliacao/:idUsuario/:idFilme', avaliacaoController.updateAvaliacao);
router.delete('/avaliacao/:idUsuario/:idFilme', avaliacaoController.deleteAvaliacao);

module.exports = router;