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
        dataNascimento: new Date("1990-05-15T00:00:00.000Z"),
        createdAt: new Date("2025-05-20T03:47:56.452Z"),
        updatedAt: new Date("2025-05-20T03:47:56.452Z"),
        tipoUsuario: "admin"
      },
      {
        id: 4,
        nome: "Arthur Ramos",
        senha: "$2b$10$wMpT7dneFrBUlPdC4oE/Lefxe8w0k1FYWBdCXr.szU44C7wKh49Qq",
        email: "arthur@gmail.com",
        status: 1,
        apelido: "Arthur",
        dataNascimento: new Date("2005-09-14T00:00:00.000Z"),
        createdAt: new Date("2025-05-20T06:15:19.425Z"),
        updatedAt: new Date("2025-05-20T06:15:19.425Z"),
        tipoUsuario: "comum"
      },
      {
        id: 5,
        nome: "Bárbara Cobo",
        senha: "$2b$10$fi6Dw9K4YMazy2wR4N6nvOW75QxHzzDAIO9O02p9UVHVErbupmBJ6",
        email: "barbara@gmail.com",
        status: 1,
        apelido: "babara",
        dataNascimento: new Date("2004-01-30T00:00:00.000Z"),
        createdAt: new Date("2025-05-20T06:16:10.044Z"),
        updatedAt: new Date("2025-05-20T06:16:10.044Z"),
        tipoUsuario: "comum"
      },
      {
        id: 2,
        nome: "Patrick Machado Cardoso",
        senha: "$2b$10$M93JKlCwlbSAO2.inYLHY.PzvPUNR2/lFNlTMx3eCc9XZ42G5Z5gW",
        email: "patrick@gmail.com",
        status: 1,
        apelido: null,
        dataNascimento: new Date("2005-04-12T00:00:00.000Z"),
        createdAt: new Date("2025-05-20T04:21:00.847Z"),
        updatedAt: new Date("2025-06-02T20:45:24.161Z"),
        tipoUsuario: "comum"
      },
      {
        id: 3,
        nome: "Luan Flor",
        senha: "$2b$10$gz2fBmm2jY.z3/onsOF0S./4gKPQCxvs2NFCRFnWh3t9jKTJjx57i",
        email: "luan@gmail.com",
        status: 1,
        apelido: "Flor",
        dataNascimento: new Date("2005-07-21T00:00:00.000Z"),
        createdAt: new Date("2025-05-20T06:14:43.701Z"),
        updatedAt: new Date("2025-06-04T03:50:45.749Z"),
        tipoUsuario: "admin"
      },
      {
        id: 6,
        nome: "João Pedro",
        senha: "$2b$10$slbDRPUQh43rBme85kaQ7.MyCIqR71moL1qhqVB.fcaWmer3JpzXC",
        email: "joao@gmail.com",
        status: 1,
        apelido: "Gomes",
        dataNascimento: new Date("2000-08-09T00:00:00.000Z"),
        createdAt: new Date("2025-06-04T03:20:43.867Z"),
        updatedAt: new Date("2025-06-04T04:06:30.213Z"),
        tipoUsuario: "comum"
      },
      {
        id: 7,
        nome: "Carlos Souza",
        senha: "$2b$10$BdeMRirr1vkEICSLKqMNm.1MQ3dvBfpCx5d3Ciu5pny3OGTJAmu2O",
        email: "carlos@gmail.com",
        status: 1,
        apelido: "Carlão",
        dataNascimento: new Date("1992-03-10T00:00:00.000Z"),
        createdAt: new Date("2025-06-07T19:24:56.781Z"),
        updatedAt: new Date("2025-06-07T19:24:56.781Z"),
        tipoUsuario: "comum"
      },
      {
        id: 8,
        nome: "Fernanda Lima",
        senha: "$2b$10$.P2wu9rbPasNx230SUisEOeZES9CbmK9eU4lJIywAkOoN8GQquLt2",
        email: "fernanda@gmail.com",
        status: 1,
        apelido: "Fê",
        dataNascimento: new Date("1998-11-22T00:00:00.000Z"),
        createdAt: new Date("2025-06-07T19:25:45.524Z"),
        updatedAt: new Date("2025-06-07T19:25:45.524Z"),
        tipoUsuario: "comum"
      },
      {
        id: 10,
        nome: "Juliana Alves",
        senha: "$2b$10$0z57iHwrxtk.HrUd8QTi9eqHFBXkDTnbZT/SrpXX61VdKVj1OIyIq",
        email: "juliana@gmail.com",
        status: 1,
        apelido: "Ju",
        dataNascimento: new Date("1995-02-28T00:00:00.000Z"),
        createdAt: new Date("2025-06-07T19:27:42.416Z"),
        updatedAt: new Date("2025-06-07T19:27:42.416Z"),
        tipoUsuario: "comum"
      },
      {
        id: 9,
        nome: "Gabriela Torres",
        senha: "$2b$10$mhrytiWOjhuyLZTEQht1KuueZTd.xLV/WXnC/UbB2mqmZc0pI1sRu",
        email: "gabriela@gmail.com",
        status: 1,
        apelido: "Gabi",
        dataNascimento: new Date("2001-07-15T00:00:00.000Z"),
        createdAt: new Date("2025-06-07T19:27:03.443Z"),
        updatedAt: new Date("2025-06-07T19:29:44.881Z"),
        tipoUsuario: "comum"
      }
    ],
    skipDuplicates: true,
  });

  // 3. Filmes
  await prisma.filme.createMany({
    data: [
      {
        id: 9,
        nome: "A Origem",
        diretor: "Christopher Nolan",
        anoLancamento: 2010,
        duracao: 148,
        produtora: "Warner Bros.",
        classificacao: "14+",
        poster: "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        status: 1,
        mediaAvaliacoes: 8.5,
      },
      {
        id: 10,
        nome: "Gladiador",
        diretor: "Ridley Scott",
        anoLancamento: 2000,
        duracao: 155,
        produtora: "DreamWorks",
        classificacao: "16+",
        poster: "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        status: 1,
        mediaAvaliacoes: 7.5,
      },
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
        id: 11,
        nome: "O Rei Leão",
        diretor: "Roger Allers",
        anoLancamento: 1994,
        duracao: 88,
        produtora: "Disney",
        classificacao: "Livre",
        poster: "https://image.tmdb.org/t/p/original/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
        status: 1,
        mediaAvaliacoes: 8.5,
      },
      {
        id: 13,
        nome: "Homem-Aranha",
        diretor: "Sam Raimi",
        anoLancamento: 2002,
        duracao: 121,
        produtora: "Sony",
        classificacao: "12+",
        poster: "https://image.tmdb.org/t/p/original/rweIrveL43TaxUN0akQEaAXL6x0.jpg",
        status: 1,
        mediaAvaliacoes: 7.833333333333333,
      },
      {
        id: 14,
        nome: "Vingadores: Ultimato",
        diretor: "Anthony Russo, Joe Russo",
        anoLancamento: 2019,
        duracao: 181,
        produtora: "Marvel",
        classificacao: "12+",
        poster: "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
        status: 1,
        mediaAvaliacoes: 8.833333333333334,
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
        mediaAvaliacoes: 10,
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
        id: 15,
        nome: "Forrest Gump",
        diretor: "Robert Zemeckis",
        anoLancamento: 1994,
        duracao: 142,
        produtora: "Paramount",
        classificacao: "12+",
        poster: "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        status: 1,
        mediaAvaliacoes: 8.5,
      },
      {
        id: 16,
        nome: "O Poderoso Chefão",
        diretor: "Francis Ford Coppola",
        anoLancamento: 1972,
        duracao: 175,
        produtora: "Paramount",
        classificacao: "18+",
        poster: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        status: 1,
        mediaAvaliacoes: 9.5,
      },
      {
        id: 17,
        nome: "Os Incríveis",
        diretor: "Brad Bird",
        anoLancamento: 2004,
        duracao: 115,
        produtora: "Pixar",
        classificacao: "Livre",
        poster: "https://image.tmdb.org/t/p/original/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
        status: 1,
        mediaAvaliacoes: 7.75,
      },
      {
        id: 18,
        nome: "Shrek",
        diretor: "Andrew Adamson",
        anoLancamento: 2001,
        duracao: 90,
        produtora: "DreamWorks",
        classificacao: "Livre",
        poster: "https://image.tmdb.org/t/p/original/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
        status: 1,
        mediaAvaliacoes: 8.25,
      },
      {
        id: 19,
        nome: "Coringa",
        diretor: "Todd Phillips",
        anoLancamento: 2019,
        duracao: 122,
        produtora: "Warner Bros.",
        classificacao: "16+",
        poster: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        status: 1,
        mediaAvaliacoes: 8.5,
      },
      {
        id: 20,
        nome: "Frozen",
        diretor: "Chris Buck",
        anoLancamento: 2013,
        duracao: 102,
        produtora: "Disney",
        classificacao: "Livre",
        poster: "https://image.tmdb.org/t/p/original/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
        status: 1,
        mediaAvaliacoes: 7.75,
      },
    ],
    skipDuplicates: true,
  });

  // 4. GeneroFilme (relacionamentos N:N)
  await prisma.generoFilme.createMany({
    data: [
      { idGenero: 9, idFilme: 9 },    // A Origem - Ficção Científica
      { idGenero: 4, idFilme: 10 },   // Gladiador - Drama
      { idGenero: 2, idFilme: 1 },    // O Senhor dos Anéis - Comédia
      { idGenero: 5, idFilme: 11 },   // O Rei Leão - Aventura
      { idGenero: 12, idFilme: 11 },  // O Rei Leão - Animação
      { idGenero: 2, idFilme: 13 },   // Homem-Aranha - Comédia
      { idGenero: 1, idFilme: 13 },   // Homem-Aranha - Ação
      { idGenero: 1, idFilme: 14 },   // Vingadores - Ação
      { idGenero: 5, idFilme: 14 },   // Vingadores - Aventura
      { idGenero: 12, idFilme: 5 },   // Toy Story - Animação
      { idGenero: 6, idFilme: 4 },    // Titanic - Romance
      { idGenero: 4, idFilme: 4 },    // Titanic - Drama
      { idGenero: 4, idFilme: 15 },   // Forrest Gump - Drama
      { idGenero: 4, idFilme: 16 },   // O Poderoso Chefão - Drama
      { idGenero: 1, idFilme: 16 },   // O Poderoso Chefão - Ação
      { idGenero: 12, idFilme: 17 },  // Os Incríveis - Animação
      { idGenero: 2, idFilme: 17 },   // Os Incríveis - Comédia
      { idGenero: 12, idFilme: 18 },  // Shrek - Animação
      { idGenero: 2, idFilme: 18 },   // Shrek - Comédia
      { idGenero: 4, idFilme: 19 },   // Coringa - Drama
      { idGenero: 3, idFilme: 19 },   // Coringa - Terror
      { idGenero: 12, idFilme: 20 },  // Frozen - Animação
      { idGenero: 6, idFilme: 20 },   // Frozen - Romance
    ],
    skipDuplicates: true,
  });

  // 5. Avaliações
  await prisma.avaliacao.createMany({
    data: [
      { idUsuario: 2, idFilme: 1, nota: 8.5, comentario: "Ótimo filme!" },
      { idUsuario: 3, idFilme: 1, nota: 5.5, comentario: "Achei mais ou menos..." },
      { idUsuario: 2, idFilme: 4, nota: 9, comentario: "Chorei muito!!! =(" },
      { idUsuario: 3, idFilme: 9, nota: 8, comentario: "Mindblowing!" },
      { idUsuario: 4, idFilme: 9, nota: 8.5, comentario: "Nolan é gênio." },
      { idUsuario: 5, idFilme: 9, nota: 9, comentario: "Muito criativo." },
      { idUsuario: 2, idFilme: 10, nota: 7, comentario: "Bom filme." },
      { idUsuario: 3, idFilme: 10, nota: 8, comentario: "Gostei do drama." },
      { idUsuario: 4, idFilme: 11, nota: 9, comentario: "Clássico da infância." },
      { idUsuario: 5, idFilme: 11, nota: 8.5, comentario: "Muito fofo!" },
      { idUsuario: 2, idFilme: 13, nota: 8, comentario: "Divertido!" },
      { idUsuario: 3, idFilme: 13, nota: 7, comentario: "Legal." },
      { idUsuario: 4, idFilme: 14, nota: 9, comentario: "Épico!" },
      { idUsuario: 5, idFilme: 14, nota: 8.5, comentario: "Final emocionante." },
      { idUsuario: 6, idFilme: 15, nota: 9, comentario: "Forrest é demais." },
      { idUsuario: 1, idFilme: 15, nota: 8, comentario: "Inspirador." },
      { idUsuario: 2, idFilme: 16, nota: 10, comentario: "Melhor filme de máfia." },
      { idUsuario: 3, idFilme: 16, nota: 9, comentario: "Clássico absoluto." },
      { idUsuario: 4, idFilme: 17, nota: 8, comentario: "Super divertido." },
      { idUsuario: 5, idFilme: 17, nota: 7.5, comentario: "Bom para família." },
      { idUsuario: 6, idFilme: 18, nota: 8, comentario: "Shrek é vida!" },
      { idUsuario: 1, idFilme: 18, nota: 8.5, comentario: "Muito engraçado." },
      { idUsuario: 2, idFilme: 19, nota: 9, comentario: "Coringa assustador." },
      { idUsuario: 3, idFilme: 19, nota: 8, comentario: "Atuação incrível." },
      { idUsuario: 4, idFilme: 20, nota: 7.5, comentario: "Frozen é legal." },
      { idUsuario: 5, idFilme: 20, nota: 8, comentario: "Let it gooo!" },
      { idUsuario: 1, idFilme: 9, nota: 8.5, comentario: "Sonhos dentro de sonhos." },
      { idUsuario: 3, idFilme: 11, nota: 8, comentario: "Animação linda." },
      { idUsuario: 5, idFilme: 13, nota: 8.5, comentario: "Homem-Aranha raiz." },
      { idUsuario: 6, idFilme: 14, nota: 9, comentario: "Marvel no topo." },
      { idUsuario: 9, idFilme: 5, nota: 10, comentario: "Esse filme resume minha infância! " },
      { idUsuario: 10, idFilme: 5, nota: 10, comentario: "Amo esse filme!" },
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