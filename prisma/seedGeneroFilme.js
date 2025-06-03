const prisma = require('./prismaClient');

async function seedGeneroFilme() {
  const filmes = await prisma.filme.findMany();
  let count = 0;
  for (const filme of filmes) {
    if (filme.generoId) {
      // Upsert evita duplicidade caso já exista
      await prisma.generoFilme.upsert({
        where: {
          idGenero_idFilme: {
            idGenero: filme.generoId,
            idFilme: filme.id,
          }
        },
        update: {},
        create: {
          idGenero: filme.generoId,
          idFilme: filme.id,
        }
      });
      count++;
    }
  }
  console.log(`Foram populados ${count} registros em GeneroFilme.`);
  await prisma.$disconnect();
}

seedGeneroFilme().catch(e => {
  console.error(e);
  prisma.$disconnect();
});