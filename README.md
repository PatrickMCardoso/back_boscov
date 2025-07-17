# BACK_BOSCOV

Empowering Seamless Connections for Limitless Innovation

> **Atenção:** Este repositório é o backend do sistema. Para a interface web, acesse também o repositório [front_boscov](../front_boscov) — ambos se complementam para a experiência completa!

---

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura e Estrutura](#arquitetura-e-estrutura)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Execução](#execução)
  - [Seed do Banco de Dados](#seed-do-banco-de-dados)
- [Documentação da API](#documentação-da-api)
- [Boas Práticas Adotadas](#boas-práticas-adotadas)
- [Complemento Frontend](#complemento-frontend)
- [Licença](#licença)

---

## Visão Geral

O `back_boscov` é uma API RESTful para gerenciamento de filmes, avaliações e usuários, com autenticação JWT, validação robusta e documentação Swagger. Ele serve como backend para o sistema de avaliações de filmes, integrando-se ao frontend desenvolvido em Next.js.

---

## Tecnologias Utilizadas

- **Node.js** & **Express.js** — Servidor e API REST
- **Prisma ORM** — Modelagem e acesso ao banco de dados
- **PostgreSQL** — Banco de dados relacional
- **Docker Compose** — Orquestração de containers
- **JWT (jsonwebtoken)** — Autenticação baseada em token
- **bcrypt** — Hash de senhas
- **Swagger** — Documentação automática da API
- **Zod** — Validação de dados
- **ESLint** — Padronização de código
- **TypeScript** (parcial, para tipagem e validação)
- **CORS** — Permitir integração com frontend

---

## Arquitetura e Estrutura

```
back_boscov/
│
├── docker-compose.yml
├── index.js
├── package.json
├── prisma/
│   ├── schema.prisma
│   ├── seedAll.js
│   └── prismaClient.js
├── src/
│   ├── config/         # Configurações (JWT, Swagger)
│   ├── controllers/    # Lógica dos endpoints
│   ├── docs/           # Documentação Swagger
│   ├── errors/         # Exceções customizadas
│   ├── middlewares/    # Middlewares (auth, rate limit, erros)
│   ├── routes/         # Rotas da API
│   ├── services/       # Lógica de negócio
│   └── validations/    # Schemas de validação (Zod)
└── ...
```

---

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/) (ou use o container Docker)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/back_boscov.git
   cd back_boscov
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz com:
     ```
     DATABASE_URL=postgresql://admin:admin123@localhost:5434/filmesdb
     SECRET_JWT=sua_chave_secreta
     ```

4. **Suba o banco de dados com Docker Compose:**
   ```bash
   docker-compose up -d
   ```

5. **Rode as migrations do Prisma:**
   ```bash
   npx prisma migrate deploy
   ```

### Execução

```bash
node index.js
```
O servidor estará disponível em `http://localhost:3030`.

### Seed do Banco de Dados

Para popular o banco com dados iniciais:

```bash
node prisma/seedAll.js
```

---

## Documentação da API

Acesse a documentação interativa em:  
[http://localhost:3030/api-docs](http://localhost:3030/api-docs)

---

## Boas Práticas Adotadas

- **Separação de responsabilidades:** controllers, services, middlewares, validações.
- **Validação de dados:** Zod para schemas robustos.
- **Autenticação segura:** JWT + bcrypt.
- **Tratamento centralizado de erros:** middlewares e exceções customizadas.
- **Rate limiting:** proteção contra abuso de requisições.
- **Padronização de código:** ESLint e organização modular.
- **Documentação automática:** Swagger.
- **Seed e migrations:** versionamento e popular banco de dados.
- **Uso de variáveis de ambiente:** para dados sensíveis.

---

## Complemento Frontend

> **Importante:** Para a interface web, utilize o repositório [front_boscov](../front_boscov).  
> Os dois projetos se integram para fornecer a experiência completa de avaliação de filmes.

---

## Licença

Este projeto está sob a licença MIT.