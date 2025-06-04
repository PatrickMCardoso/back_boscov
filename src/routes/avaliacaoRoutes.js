const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeAdmin, authorizeAdminOrComum } = require('../middlewares/auth');
const avaliacaoController = require('../controllers/avaliacaoController');

// Rotas protegidas
router.post('/avaliacao', authenticateUser, authorizeAdminOrComum, avaliacaoController.createAvaliacao);
router.put('/avaliacao/:idUsuario/:idFilme', authenticateUser, authorizeAdminOrComum, avaliacaoController.updateAvaliacao);
router.delete('/avaliacao/:idUsuario/:idFilme', authenticateUser, authorizeAdminOrComum, avaliacaoController.deleteAvaliacao);
router.get('/avaliacoes/usuario/:idUsuario', authenticateUser, authorizeAdminOrComum, avaliacaoController.getAvaliacoesByUsuario);
// Apenas admin
router.get('/avaliacoes', authenticateUser, authorizeAdmin, avaliacaoController.getAllAvaliacoes);


// Rota pública
router.get('/avaliacoes/filme/:idFilme', avaliacaoController.getAvaliacoesByFilme);

module.exports = router;