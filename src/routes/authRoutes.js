const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');
const { loginRateLimiter } = require('../middlewares/rateLimiter');

// Rota pública
router.post('/login', loginRateLimiter, loginUser);

module.exports = router;