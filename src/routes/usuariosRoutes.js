const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeAdmin, authorizeAdminOrComum } = require('../middlewares/auth');
const { createUser, listUsers, getUserById, updateUser, deleteUser, reactivateUser } = require('../controllers/usuariosController');

// Rotas públicas
router.post('/usuario', createUser);

// Rotas protegidas
router.get('/usuarios', authenticateUser, authorizeAdmin, listUsers); 
router.get('/usuario/:id', authenticateUser, authorizeAdminOrComum, getUserById); 
router.put('/usuario/:id', authenticateUser, authorizeAdminOrComum, updateUser); 
router.delete('/usuario/:id', authenticateUser, authorizeAdmin, deleteUser); 
router.patch('/usuario/:id/reativar', authenticateUser, authorizeAdmin, reactivateUser); 

module.exports = router;