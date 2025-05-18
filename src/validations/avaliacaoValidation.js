const { z } = require('zod');

const AvaliacaoSchema = z.object({
  idUsuario: z.number()
    .int({ message: 'O campo "idUsuario" deve ser um número inteiro.' })
    .positive({ message: 'O campo "idUsuario" deve ser um número positivo.' }),

  idFilme: z.number()
    .int({ message: 'O campo "idFilme" deve ser um número inteiro.' })
    .positive({ message: 'O campo "idFilme" deve ser um número positivo.' }),

  nota: z.number()
    .min(0, { message: 'A nota deve ser no mínimo 0.' })
    .max(10, { message: 'A nota deve ser no máximo 10.' }),

  comentario: z.string()
    .max(500, { message: 'O comentário deve conter no máximo 500 caracteres.' })
    .optional(),
});

const AvaliacaoUpdateSchema = AvaliacaoSchema.partial();

module.exports = {
  AvaliacaoSchema,
  AvaliacaoUpdateSchema,
};