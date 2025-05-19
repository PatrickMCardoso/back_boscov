/**
 * @swagger
 * tags:
 *   name: Avaliação
 *   description: Endpoints para gerenciar avaliações de filmes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Avaliacao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         idUsuario:
 *           type: integer
 *           example: 2
 *         idFilme:
 *           type: integer
 *           example: 3
 *         nota:
 *           type: number
 *           format: float
 *           minimum: 0
 *           maximum: 10
 *           example: 8.5
 *         comentario:
 *           type: string
 *           maxLength: 500
 *           example: "Ótimo filme!"
 *         status:
 *           type: integer
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     AvaliacaoInput:
 *       type: object
 *       required:
 *         - idUsuario
 *         - idFilme
 *         - nota
 *       properties:
 *         idUsuario:
 *           type: integer
 *           example: 2
 *         idFilme:
 *           type: integer
 *           example: 3
 *         nota:
 *           type: number
 *           example: 9
 *         comentario:
 *           type: string
 *           example: "Muito bom"
 *
 *     AvaliacaoUpdate:
 *       type: object
 *       properties:
 *         nota:
 *           type: number
 *           example: 7.5
 *         comentario:
 *           type: string
 *           example: "Revendo, achei razoável."
 */

/**
 * @swagger
 * /avaliacao:
 *   post:
 *     summary: Cria uma nova avaliação
 *     tags: [Avaliação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AvaliacaoInput'
 *     responses:
 *       201:
 *         description: Avaliação criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /avaliacoes/usuario/{idUsuario}:
 *   get:
 *     summary: Lista todas as avaliações feitas por um usuário
 *     tags: [Avaliação]
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de avaliações do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Avaliacao'
 *       404:
 *         description: Nenhuma avaliação encontrada para este usuário
 */

/**
 * @swagger
 * /avaliacoes/filme/{idFilme}:
 *   get:
 *     summary: Lista todas as avaliações feitas para um filme
 *     tags: [Avaliação]
 *     parameters:
 *       - in: path
 *         name: idFilme
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme
 *     responses:
 *       200:
 *         description: Lista de avaliações do filme
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Avaliacao'
 *       404:
 *         description: Nenhuma avaliação encontrada para este filme
 */

/**
 * @swagger
 * /avaliacao/{id}:
 *   put:
 *     summary: Atualiza uma avaliação existente
 *     tags: [Avaliação]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da avaliação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AvaliacaoUpdate'
 *     responses:
 *       200:
 *         description: Avaliação atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Avaliação não encontrada
 */

/**
 * @swagger
 * /avaliacao/{id}:
 *   delete:
 *     summary: Exclui logicamente uma avaliação
 *     tags: [Avaliação]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da avaliação
 *     responses:
 *       204:
 *         description: Avaliação excluída com sucesso
 *       404:
 *         description: Avaliação não encontrada
 */
