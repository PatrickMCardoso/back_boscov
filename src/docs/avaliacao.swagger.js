/**
 * @swagger
 * tags:
 *   name: Avaliação
 *   description: Endpoints para gerenciar avaliações de filmes
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Avaliacao:
 *       type: object
 *       properties:
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
 *         usuario:
 *           $ref: '#/components/schemas/Usuario'
 *         filme:
 *           $ref: '#/components/schemas/Filme'
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
 *     security:
 *       - bearerAuth: []
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
 * /avaliacao/{idUsuario}/{idFilme}:
 *   put:
 *     summary: Atualiza uma avaliação existente
 *     tags: [Avaliação]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: idFilme
 *         required: true
 *         schema:
 *           type: integer
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
 *       404:
 *         description: Avaliação não encontrada
 *       401:
 *         description: Não autorizado
 */

/**
 * @swagger
 * /avaliacao/{idUsuario}/{idFilme}:
 *   delete:
 *     summary: Exclui logicamente uma avaliação
 *     tags: [Avaliação]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: idFilme
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Avaliação excluída com sucesso
 *       404:
 *         description: Avaliação não encontrada
 *       401:
 *         description: Não autorizado
 */

/**
 * @swagger
 * /avaliacoes:
 *   get:
 *     summary: Lista todas as avaliações (admin)
 *     tags: [Avaliação]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de avaliações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Avaliacao'
 *       401:
 *         description: Não autorizado
 *       403:
 *         description: Acesso negado
 */

/**
 * @swagger
 * /avaliacoes/usuario/{idUsuario}:
 *   get:
 *     summary: Lista todas as avaliações feitas por um usuário
 *     tags: [Avaliação]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         schema:
 *           type: integer
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
 *       401:
 *         description: Não autorizado
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