# Contact_List_Api
Sistema de Gerenciamento de Clientes e Contatos


## Descrição

O Projeto é um sistema de gerenciamento de clientes e contatos, construído utilizando NodeJS e TypeScript. Ele fornece uma API RESTful que permite a criação, edição e exclusão de clientes e seus respectivos contatos. O projeto utiliza o banco de dados PostgreSQL para armazenar os dados e o TypeORM como ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados. As requisições são autenticadas usando tokens gerados através do endpoint `/login`.

## Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- NodeJS
- Express
- TypeScript
- PostgreSQL
- TypeORM
- Zod
- Bcryptjs

## Instalação e Uso

### Requisitos:
- NodeJS
- Npm ou Yarn
- Banco de dados PostgreSQL
<br>
1. Clone o projeto em sua máquina e instale as dependências com o seguinte comando:<br>
`yarn install`<br>
`npm install`<br>
<br>
<br>
2.Crie um arquivo `.env`, copiando o formato do arquivo `.env.example`:<br>
<br>
3.Execute as migrações para criar as tabelas no banco de dados:<br>
`npx typeorm migration:run -c src/data-source.ts`<br>
`yarn typeorm migration:run -c src/data-source.ts`<br>
`npm typeorm migration:run -c src/data-source.ts`<br>

### Endpoints

A API possui os seguintes endpoints:

- **POST** `/users`: Criação de um cliente.
- **PATCH** `/users/id`: Edita o cliente com o ID específico.
- - **GET** `/users`: Lista o cliente.
- **DELETE** `/users/id`: Deleta o cliente com o ID específico.
- **POST** `/login`: Retorna o token após a autenticação.
- **POST** `/contacts`: Cria um novo contato para o cliente.
- **GET** `/contacts`: Lista todos os contatos do cliente.
- **GET** `/contacts/id`: Retorna o contato específico do cliente.
- **PATCH** `/contacts/id`: Edita o contato específico do cliente.
- **DELETE** `/contacts/id`: Deleta o contato específico do cliente.


## CREATE USER

**Endpoint**: `/users`

- **Descrição**: Cria um novo Usuário.

- **Método**: POST

- **Autenticação**: Não é necessária autenticação.

- **Corpo da Requisição**:

```json
{
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"password": "buzz lightyear",
"telephone": "27342343234"
}
```
Retorno Esperado:

STATUS: 201
```json
Copy code
{
"id":1,
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"password": "buzz lightyear",
"telephone": "27342343234",
"createdAt": "2023-07-30",
"updatedAt": "2023-07-30",
"deletedAt": null
}
```
LOGIN
Endpoint: /login

Descrição: Realiza o login do usuário.

Método: POST

Autenticação: Não é necessária autenticação.

Corpo da Requisição:

```json
Copy code
{
"email": "buzzlightyear@gmail.com",
"password": "buzzlightyearsenha@gmail.com"
}
```
Retorno Esperado:

STATUS: 200
```json
Copy code
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
EDIT USER
Endpoint: /users/{id}

Descrição: Edita os dados de um usuário existente.

Método: PATCH

Autenticação: É necessário autenticação.

Corpo da Requisição (campos opcionais):

```json
Copy code
{
"fullname": "buzz lightyear",
"email": buzzlightyear@gmail.com",
"password": "buzz lightyear",
"telephone": "27342343234"
}
```
Retorno Esperado:

STATUS: 200
```json
Copy code
{
"id":1,
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"password": "buzz lightyear",
"telephone": "27342343234",
"createdAt": "2023-07-30",
"updatedAt":"2023-07-30",
"deletedAt": null
}
```
DELETE USERS
Endpoint: /users/{id}

Descrição: Deleta um cliente existente.

Método: DELETE

Autenticação: É necessário autenticação.

Retorno Esperado:

STATUS: 204

## CREATE CONTACT

**Endpoint**: `/contacts`

- **Descrição**: Cria um novo contato.

- **Método**: POST

- **Autenticação**:É necessária autenticação.

- **Corpo da Requisição**:

```json
{
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"telephone": "27342343234"
}
```
Retorno Esperado:

STATUS: 201
```json
Copy code
{
"id":1,
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"telephone": "27342343234",
"createdAt": "2023-07-30",
"updatedAt": "2023-07-30",
"deletedAt": null
}
```

GET CONTACT

**Endpoint**: `/contacts`

- **Descrição**: busca contatos.

- **Método**: GET

- **Autenticação**:É necessária autenticação.

- **Corpo da Requisição**: Não necessita

- retorno

- STATUS: 200
```json
Copy code
{
"id":1,
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"telephone": "27342343234",
"createdAt": "2023-07-30",
"updatedAt": "2023-07-30",
"deletedAt": null
}
```

## UPDATE CONTACT

**Endpoint**: `/contact/{id}`

- **Descrição**: Atualiza um contato.

- **Método**: PATCH

- **Autenticação**:É necessária autenticação.

- **Corpo da Requisição**:

```json
{
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"telephone": "27342343234"
}
```
Retorno Esperado:

STATUS: 200
```json
Copy code
{
"id":1,
"fullname": "buzz lightyear",
"email": "buzzlightyear@gmail.com",
"telephone": "27342343234",
"createdAt": "2023-07-30",
"updatedAt": "2023-07-30",
"deletedAt": null
}
```
DELETE CONTACT
Endpoint: /contact/{id}

Descrição: Deleta um cliente existente.

Método: DELETE

Autenticação: É necessário autenticação.

Retorno Esperado:

STATUS: 204


