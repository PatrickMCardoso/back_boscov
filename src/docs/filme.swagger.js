/**
 * @swagger
 * components:
 *   schemas:
 *     Filme:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         diretor:
 *           type: string
 *         anoLancamento:
 *           type: integer
 *         generoId:
 *           type: integer
 *         duracao:
 *           type: integer
 *         produtora:
 *           type: string
 *         classificacao:
 *           type: string
 *         poster:
 *           type: string
 *         status:
 *           type: integer

 * /filme:
 *   post:
 *     summary: Cria um novo filme
 *     tags: [Filme]
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
 *         description: Erro ao criar filme

 * /filmes:
 *   get:
 *     summary: Lista todos os filmes ativos
 *     tags: [Filme]
 *     responses:
 *       200:
 *         description: Lista de filmes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Filme'

 * /filme/{id}:
 *   get:
 *     summary: Busca um filme pelo ID
 *     tags: [Filme]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Filme encontrado
 *       404:
 *         description: Filme não encontrado

 *   put:
 *     summary: Atualiza um filme
 *     tags: [Filme]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
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
 *         description: Erro na atualização

 *   delete:
 *     summary: Deleção lógica de um filme (status 0)
 *     tags: [Filme]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Filme "deletado" com sucesso

 * /filme/{id}/reativar:
 *   patch:
 *     summary: Reativa um filme
 *     tags: [Filme]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Filme reativado
 */
