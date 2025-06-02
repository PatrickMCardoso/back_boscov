const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeAdmin, authorizeAdminOrComum } = require('../middlewares/auth');
const { createUser, listUsers, getUserById, updateUser, deleteUser, reactivateUser } = require('../controllers/usuariosController');

// Rotas públicas
router.post('/usuario', createUser);

// Rotas protegidas
router.get('/usuarios', authenticateUser, authorizeAdmin, listUsers); // Apenas admin
router.get('/usuario/:id', authenticateUser, authorizeAdminOrComum, getUserById); // Admin ou comum
router.put('/usuario/:id', authenticateUser, authorizeAdminOrComum, updateUser); // Admin ou comum
router.delete('/usuario/:id', authenticateUser, authorizeAdmin, deleteUser); // Apenas admin
router.patch('/usuario/:id/reativar', authenticateUser, authorizeAdmin, reactivateUser); // Apenas admin

module.exports = router;