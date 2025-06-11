/**
 * @swagger
 * tags:
 *   name: Filme
 *   description: Endpoints para gerenciamento de filmes
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
 *     Filme:
 *       type: object
 *       required:
 *         - nome
 *         - diretor
 *         - anoLancamento
 *         - duracao
 *         - produtora
 *         - classificacao
 *         - poster
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: "O Senhor dos Anéis: A Sociedade do Anel"
 *         diretor:
 *           type: string
 *           example: "Peter Jackson"
 *         anoLancamento:
 *           type: integer
 *           example: 2001
 *         duracao:
 *           type: integer
 *           example: 178
 *         produtora:
 *           type: string
 *           example: "New Line Cinema"
 *         classificacao:
 *           type: string
 *           example: "12+"
 *         poster:
 *           type: string
 *           format: uri
 *           example: "https://image.tmdb.org/t/p/original/zoht5lmzBXxL7FWkHHu3JISGzEg.jpg"
 *         status:
 *           type: integer
 *           example: 1
 *         mediaAvaliacoes:
 *           type: number
 *           example: 8.5
 *         generos:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 2
 *               descricao:
 *                 type: string
 *                 example: "Comédia"
 */

/**
 * @swagger
 * /filme:
 *   post:
 *     summary: Cria um novo filme
 *     tags: [Filme]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       201:
 *         description: Filme criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Lista todos os filmes ativos
 *     tags: [Filme]
 *     responses:
 *       200:
 *         description: Lista de filmes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filme'
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /filme/{id}:
 *   get:
 *     summary: Retorna um filme pelo ID
 *     tags: [Filme]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme
 *     responses:
 *       200:
 *         description: Filme encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filme'
 *       400:
 *         description: ID inválido
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Filme não encontrado
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /filme/{id}:
 *   put:
 *     summary: Atualiza um filme pelo ID
 *     tags: [Filme]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Filme não encontrado
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /filme/{id}:
 *   delete:
 *     summary: Deleta logicamente um filme (status = 0)
 *     tags: [Filme]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme
 *     responses:
 *       200:
 *         description: Filme desativado com sucesso
 *       400:
 *         description: ID inválido
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Filme não encontrado
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /filme/{id}/reativar:
 *   patch:
 *     summary: Reativa um filme logicamente excluído (status = 1)
 *     tags: [Filme]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do filme
 *     responses:
 *       200:
 *         description: Filme reativado com sucesso
 *       400:
 *         description: ID inválido
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Filme não encontrado
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /filmes/search:
 *   get:
 *     summary: Busca filmes pelo nome
 *     tags: [Filme]
 *     parameters:
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome (ou parte) do filme para busca
 *     responses:
 *       200:
 *         description: Lista de filmes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filme'
 *       400:
 *         description: Parâmetro "nome" obrigatório
 */