const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedGeneros() {
  await prisma.genero.createMany({
    data: [
      { descricao: "Ação" },
      { descricao: "Comédia" },
      { descricao: "Terror" },
      { descricao: "Drama" },
      { descricao: "Aventura" },
      { descricao: "Romance" },
      { descricao: "Suspense" },
      { descricao: "Musical" },
      { descricao: "Ficção Científica" },
      { descricao: "Histórico" },
      { descricao: "Documentário" },
      { descricao: "Animação" },
    ],
  });
  console.log("Gêneros adicionados com sucesso!");
}

//seedGeneros();

module.exports = prisma;