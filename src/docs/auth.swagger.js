/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Endpoints relacionados à autenticação de usuários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginInput:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: usuario@example.com
 *         senha:
 *           type: string
 *           format: password
 *           example: "123456"

 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Token JWT para autenticação
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

 *     UnauthorizedError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: Credenciais inválidas.

 *     TokenMissingError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: Token não fornecido.

 *     TokenInvalidError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: Token inválido.
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login e retorna um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Email ou senha não fornecidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 *       401:
 *         description: Credenciais inválidas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnauthorizedError'
 */
