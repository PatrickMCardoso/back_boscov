/**
 * @swagger
 * tags:
 *   name: Gênero
 *   description: Endpoints para gerenciamento de gêneros de filmes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Genero:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         descricao:
 *           type: string
 *           example: "Ação"
 */

/**
 * @swagger
 * /generos:
 *   get:
 *     summary: Lista todos os gêneros de filmes
 *     tags: [Gênero]
 *     responses:
 *       200:
 *         description: Lista de gêneros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genero'
 */