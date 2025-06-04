const express = require('express');
const router = express.Router();
const prisma = require('../../prisma/prismaClient');

router.get('/generos', async (req, res, next) => {
  try {
    const generos = await prisma.genero.findMany();
    res.json(generos);
  } catch (error) {
    next(error);
  }
});

module.exports = router;