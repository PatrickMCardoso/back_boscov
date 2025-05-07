const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedGeneros() {
  await prisma.genero.createMany({
    data: [
      { descricao: "Ação" },
      { descricao: "Comédia" },
      { descricao: "Terror" },
      { descricao: "Drama" },
      { descricao: "Ficção Científica" }
    ],
  });
  console.log("Gêneros adicionados com sucesso!");
}

// Chame a função apenas se necessário
//seedGeneros();

module.exports = prisma;