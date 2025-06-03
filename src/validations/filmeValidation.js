const { z } = require('zod');

const FilmeSchema = z.object({
  nome: z.string()
    .min(1, { message: 'O campo "nome" é obrigatório e deve conter pelo menos 1 caractere.' })
    .max(255, { message: 'O campo "nome" deve conter no máximo 255 caracteres.' }),

  diretor: z.string()
    .min(1, { message: 'O campo "diretor" é obrigatório e deve conter pelo menos 1 caractere.' })
    .max(255, { message: 'O campo "diretor" deve conter no máximo 255 caracteres.' }),

  anoLancamento: z.number()
    .int({ message: 'O campo "anoLancamento" deve ser um número inteiro.' })
    .min(1888, { message: 'O campo "anoLancamento" deve ser maior ou igual a 1888.' })
    .max(new Date().getFullYear(), { message: 'O campo "anoLancamento" não pode ser maior que o ano atual.' }),

  generoIds: z.array(z.number().int({ message: 'Cada gênero deve ser um número inteiro.' }))
    .min(1, { message: 'Selecione pelo menos um gênero.' }),

  duracao: z.number()
    .int({ message: 'O campo "duracao" deve ser um número inteiro.' })
    .min(1, { message: 'O campo "duracao" deve ser maior que 0.' }),

  produtora: z.string()
    .min(1, { message: 'O campo "produtora" é obrigatório e deve conter pelo menos 1 caractere.' })
    .max(255, { message: 'O campo "produtora" deve conter no máximo 255 caracteres.' }),

  classificacao: z.string()
    .refine((val) => /^(Livre|\d{1,2}\+)$/.test(val), {
      message: 'A classificação deve estar no formato "Livre", "10+", "18+", etc.',
    }),

  poster: z.string()
    .url({ message: 'O campo "poster" deve ser uma URL válida.' })
})
  .strict({ message: 'Campos não reconhecidos foram enviados.' });

const FilmeUpdateSchema = FilmeSchema.partial(); // todos os campos opcionais

module.exports = {
  FilmeSchema,
  FilmeUpdateSchema
};
