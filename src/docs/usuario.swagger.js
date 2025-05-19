/**
 * @swagger
 * tags:
 *   name: Usuário
 *   description: Endpoints para gerenciamento de usuários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: João da Silva
 *         senha:
 *           type: string
 *           example: senha123
 *         email:
 *           type: string
 *           example: joao@email.com
 *         apelido:
 *           type: string
 *           example: joaosilva
 *         dataNascimento:
 *           type: string
 *           format: date
 *           example: 2000-05-20
 *         tipoUsuario:
 *           type: string
 *           enum: [admin, comum]
 *           example: comum
 *         status:
 *           type: integer
 *           description: 1 para ativo, 0 para inativo
 *           example: 1
 */

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuário]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - senha
 *               - email
 *               - dataNascimento
 *               - tipoUsuario
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João da Silva
 *               senha:
 *                 type: string
 *                 example: senha123
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               apelido:
 *                 type: string
 *                 example: joaosilva
 *               dataNascimento:
 *                 type: string
 *                 format: date
 *                 example: 2000-05-20
 *               tipoUsuario:
 *                 type: string
 *                 enum: [admin, comum]
 *                 example: comum
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login do usuário
 *     tags: [Usuário]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               senha:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários ativos
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       401:
 *         description: Não autorizado
 *       403:
 *         description: Acesso negado
 */

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Não autorizado
 */

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Não autorizado
 */

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     summary: Realiza exclusão lógica de um usuário
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: Usuário desativado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Não autorizado
 */

/**
 * @swagger
 * /usuario/{id}/reativar:
 *   patch:
 *     summary: Reativa um usuário desativado
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuário reativado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Não autorizado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: João da Silva
 *         email:
 *           type: string
 *           example: joao@email.com
 *         apelido:
 *           type: string
 *           example: joaosilva
 *         dataNascimento:
 *           type: string
 *           format: date
 *           example: 2000-05-20
 *         tipoUsuario:
 *           type: string
 *           enum: [admin, comum]
 *           example: comum
 *         status:
 *           type: integer
 *           example: 1
 */

