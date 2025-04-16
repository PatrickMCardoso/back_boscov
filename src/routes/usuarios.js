const express = require('express');
const router = express.Router();
const { createUser, listUsers, getUserById, updateUser, deleteUser, reactivateUser } = require('../controllers/usuarios');

router.post('/usuario', createUser);
router.get('/usuarios', listUsers);
router.get('/usuario/:id', getUserById);
router.put('/usuario/:id', updateUser);
router.delete('/usuario/:id', deleteUser);
router.patch('/usuario/:id/reativar', reactivateUser);

module.exports = router;