const express = require('express');
const router = express.Router();
const { criarUsuario } = require('../controllers/usuarios');

router.post('/usuarios', criarUsuario);

module.exports = router;
