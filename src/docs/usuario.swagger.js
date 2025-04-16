/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         senha:
 *           type: string
 *         email:
 *           type: string
 *         status:
 *           type: integer
 *         apelido:
 *           type: string
 *         dataNascimento:
 *           type: string
 *           format: date-time
 *         tipoUsuario:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao criar usuário

 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários ativos
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'

 * /usuario/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [Usuario]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado

 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Usuario]
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
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Erro na atualização

 *   delete:
 *     summary: Deleção lógica de um usuário (status 0)
 *     tags: [Usuario]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Usuário "deletado" com sucesso

 * /usuario/{id}/reativar:
 *   patch:
 *     summary: Reativa um usuário
 *     tags: [Usuario]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário reativado
 */
