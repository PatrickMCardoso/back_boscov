const prisma = require('./prismaClient');

async function main() {
  // Zera as tabelas na ordem correta (dependências)
  await prisma.avaliacao.deleteMany();
  await prisma.generoFilme.deleteMany();
  await prisma.filme.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.genero.deleteMany();

  // 1. Gêneros
  await prisma.genero.createMany({
    data: [
      { id: 1, descricao: "Ação" },
      { id: 2, descricao: "Comédia" },
      { id: 3, descricao: "Terror" },
      { id: 4, descricao: "Drama" },
      { id: 5, descricao: "Aventura" },
      { id: 6, descricao: "Romance" },
      { id: 7, descricao: "Suspense" },
      { id: 8, descricao: "Musical" },
      { id: 9, descricao: "Ficção Científica" },
      { id: 10, descricao: "Histórico" },
      { id: 11, descricao: "Documentário" },
      { id: 12, descricao: "Animação" },
    ],
    skipDuplicates: true,
  });

  // 2. Usuários
  await prisma.usuario.createMany({
    data: [
      {
        id: 1,
        nome: "Admin Teste",
        senha: "$2b$10$RS0PvI1WRGb9F.b3eGt9dO4RmSlbXTSxn5sVKiKY/r.M1F3XP03.i",
        email: "admin@teste.com",
        status: 1,
        apelido: null,
        dataNascimento: new Date("1990-05-15"),
        tipoUsuario: "admin",
        createdAt: new Date("2025-05-20T03:47:56.452Z"),
        updatedAt: new Date("2025-05-20T03:47:56.452Z"),
      },
      {
        id: 4,
        nome: "Arthur Ramos",
        senha: "$2b$10$wMpT7dneFrBUlPdC4oE/Lefxe8w0k1FYWBdCXr.szU44C7wKh49Qq",
        email: "arthur@gmail.com",
        status: 1,
        apelido: "Arthur",
        dataNascimento: new Date("2005-09-14"),
        tipoUsuario: "comum",
        createdAt: new Date("2025-05-20T06:15:19.425Z"),
        updatedAt: new Date("2025-05-20T06:15:19.425Z"),
      },
      {
        id: 5,
        nome: "Bárbara Cobo",
        senha: "$2b$10$fi6Dw9K4YMazy2wR4N6nvOW75QxHzzDAIO9O02p9UVHVErbupmBJ6",
        email: "barbara@gmail.com",
        status: 1,
        apelido: "babara",
        dataNascimento: new Date("2004-01-30"),
        tipoUsuario: "comum",
        createdAt: new Date("2025-05-20T06:16:10.044Z"),
        updatedAt: new Date("2025-05-20T06:16:10.044Z"),
      },
      {
        id: 2,
        nome: "Patrick Machado Cardoso",
        senha: "$2b$10$M93JKlCwlbSAO2.inYLHY.PzvPUNR2/lFNlTMx3eCc9XZ42G5Z5gW",
        email: "patrick@gmail.com",
        status: 1,
        apelido: null,
        dataNascimento: new Date("2005-04-12"),
        tipoUsuario: "comum",
        createdAt: new Date("2025-05-20T04:21:00.847Z"),
        updatedAt: new Date("2025-06-02T20:45:24.161Z"),
      },
      {
        id: 3,
        nome: "Luan Flor",
        senha: "$2b$10$gz2fBmm2jY.z3/onsOF0S./4gKPQCxvs2NFCRFnWh3t9jKTJjx57i",
        email: "luan@gmail.com",
        status: 1,
        apelido: "Flor",
        dataNascimento: new Date("2005-07-21"),
        tipoUsuario: "admin",
        createdAt: new Date("2025-05-20T06:14:43.701Z"),
        updatedAt: new Date("2025-06-04T03:50:45.749Z"),
      },
      {
        id: 6,
        nome: "João Pedro",
        senha: "$2b$10$slbDRPUQh43rBme85kaQ7.MyCIqR71moL1qhqVB.fcaWmer3JpzXC",
        email: "joao@gmail.com",
        status: 1,
        apelido: "Gomes",
        dataNascimento: new Date("2000-08-09"),
        tipoUsuario: "comum",
        createdAt: new Date("2025-06-04T03:20:43.867Z"),
        updatedAt: new Date("2025-06-04T04:06:30.213Z"),
      },
    ],
    skipDuplicates: true,
  });

  // 3. Filmes
  await prisma.filme.createMany({
    data: [
      {
        id: 1,
        nome: "O Senhor dos Anéis: A Sociedade do Anel",
        diretor: "Peter Jackson",
        anoLancamento: 2001,
        duracao: 178,
        produtora: "New Line Cinema",
        classificacao: "12+",
        poster: "https://image.tmdb.org/t/p/original/zoht5lmzBXxL7FWkHHu3JISGzEg.jpg",
        status: 1,
        mediaAvaliacoes: 7,
      },
      {
        id: 2,
        nome: "O Senhor dos Anéis: As Duas Torres",
        diretor: "Peter Jackson",
        anoLancamento: 2002,
        duracao: 179,
        produtora: "New Line Cinema",
        classificacao: "12+",
        poster: "https://image.tmdb.org/t/p/original/cmTFY35KK40yBX23Z9HhqU5uZ2O.jpg",
        status: 1,
        mediaAvaliacoes: 0,
      },
      {
        id: 3,
        nome: "Matrix",
        diretor: "Lana Wachowski, Lilly Wachowski",
        anoLancamento: 1999,
        duracao: 136,
        produtora: "Warner Bros.",
        classificacao: "14+",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        status: 1,
        mediaAvaliacoes: 0,
      },
      {
        id: 4,
        nome: "Titanic",
        diretor: "James Cameron",
        anoLancamento: 1997,
        duracao: 195,
        produtora: "20th Century Fox",
        classificacao: "12+",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        status: 1,
        mediaAvaliacoes: 9,
      },
      {
        id: 5,
        nome: "Toy Story",
        diretor: "John Lasseter",
        anoLancamento: 1995,
        duracao: 81,
        produtora: "Pixar Animation Studios",
        classificacao: "Livre",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        status: 1,
        mediaAvaliacoes: 0,
      },
      {
        id: 6,
        nome: "Parasita",
        diretor: "Bong Joon-ho",
        anoLancamento: 2019,
        duracao: 132,
        produtora: "CJ Entertainment",
        classificacao: "16+",
        poster: "https://image.tmdb.org/t/p/original/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        status: 1,
        mediaAvaliacoes: 0,
      },
      {
        id: 7,
        nome: "Clube da Luta",
        diretor: "David Fincher",
        anoLancamento: 2000,
        duracao: 139,
        produtora: "20th Century Fox",
        classificacao: "18+",
        poster: "https://image.tmdb.org/t/p/original/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
        status: 1,
        mediaAvaliacoes: 0,
      },
    ],
    skipDuplicates: true,
  });

  // 4. GeneroFilme (relacionamentos N:N)
  await prisma.generoFilme.createMany({
    data: [
      { idGenero: 2, idFilme: 1 },
      { idGenero: 2, idFilme: 2 },
      { idGenero: 9, idFilme: 3 },
      { idGenero: 6, idFilme: 4 },
      { idGenero: 4, idFilme: 4 },
      { idGenero: 12, idFilme: 5 },
      { idGenero: 7, idFilme: 6 },
      { idGenero: 4, idFilme: 7 },
      { idGenero: 7, idFilme: 7 },
    ],
    skipDuplicates: true,
  });

  // 5. Avaliações
  await prisma.avaliacao.createMany({
    data: [
      {
        idUsuario: 2,
        idFilme: 1,
        nota: 8.5,
        comentario: "Ótimo filme!",
      },
      {
        idUsuario: 3,
        idFilme: 1,
        nota: 5.5,
        comentario: "Achei mais ou menos...",
      },
      {
        idUsuario: 2,
        idFilme: 4,
        nota: 9,
        comentario: "Chorei muito!!! =(",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });