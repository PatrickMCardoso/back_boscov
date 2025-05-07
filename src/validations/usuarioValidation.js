const { z } = require('zod');

const UsuarioSchema = z.object({
  nome: z.string()
    .min(1, { message: 'O campo "nome" é obrigatório e deve conter pelo menos 1 caractere.' })
    .max(255, { message: 'O campo "nome" deve conter no máximo 255 caracteres.' }),

  senha: z.string()
    .min(6, { message: 'A "senha" deve conter pelo menos 6 caracteres.' }),

  email: z.string()
    .email({ message: 'O campo "email" deve conter um endereço de e-mail válido.' }),

  apelido: z.string()
    .max(100, { message: 'O campo "apelido" deve conter no máximo 100 caracteres.' })
    .optional(),

  dataNascimento: z.string()
    .refine((val) => {
      const date = new Date(val);
      return !isNaN(date.getTime());
    }, { message: 'O campo "dataNascimento" deve ser uma data válida.' }),

  tipoUsuario: z.enum(['admin', 'comum'], {
    message: 'O campo "tipoUsuario" deve ser "admin" ou "comum".'
  }),

  status: z.number()
    .int({ message: 'O campo "status" deve ser um número inteiro.' })
    .optional()
});

const UsuarioUpdateSchema = UsuarioSchema.partial();

module.exports = {
  UsuarioSchema,
  UsuarioUpdateSchema
};
