# Elections API

## Installation

To install dependencies:

```bash
bun install
```

To run:

```ts
bun run index.ts
```


Create a .env file with the following variables:

```
DATABASE_URL="your database URL"
API_KEY="your api key" # Required only for Admin
```

API Documentation

Access the Swagger documentation at:

```bash
http://localhost:3200/swagger
```

About the API: Sistema de Votação

This project implements a simple voting system with two types of users: Admin and Voter.
Actors

Admin

- Possui uma chave secreta para autenticação.

- Pode cadastrar novos candidatos no sistema.

Voter (Eleitor)

- Pode votar nos candidatos cadastrados.

- Pode consultar a lista de candidatos.

- Pode visualizar a quantidade de votos de cada candidato.