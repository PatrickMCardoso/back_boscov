const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeAdmin, authorizeAdminOrComum } = require('../middlewares/auth');
const avaliacaoController = require('../controllers/avaliacaoController');

// Apenas usuários autenticados (admin ou comum) podem criar, editar e excluir avaliações
router.post('/avaliacao', authenticateUser, authorizeAdminOrComum, avaliacaoController.createAvaliacao);
router.put('/avaliacao/:idUsuario/:idFilme', authenticateUser, authorizeAdminOrComum, avaliacaoController.updateAvaliacao);
router.delete('/avaliacao/:idUsuario/:idFilme', authenticateUser, authorizeAdminOrComum, avaliacaoController.deleteAvaliacao);

// Apenas admin pode listar todas as avaliações
router.get('/avaliacoes', authenticateUser, authorizeAdmin, avaliacaoController.getAllAvaliacoes);

// Qualquer usuário autenticado pode ver suas próprias avaliações
router.get('/avaliacoes/usuario/:idUsuario', authenticateUser, authorizeAdminOrComum, avaliacaoController.getAvaliacoesByUsuario);

// Listar avaliações de um filme é público
router.get('/avaliacoes/filme/:idFilme', avaliacaoController.getAvaliacoesByFilme);

module.exports = router;