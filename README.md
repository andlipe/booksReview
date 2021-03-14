# BookReviews

## Sobre o Projeto
Objetivo desse projeto é criar um webapp que faça a comparação entre as médias de avaliações na Tag e a média de avaliações na GoodReads.

## Criado com

[NextJS](https://nextjs.org)  
[Jest](https://jestjs.io)  
[TypeScript](https://www.typescriptlang.org)
[styled-components](https://styled-components.com)
### Pré requisitos
Node.Js 14.x
Docker
Docker-compose
## Instalação

1. Clone esse repositório
```sh
git clone https://github.com/tag-livros/andre-moura-09-03.git
```

### Com docker
Instale os containers
```sh
docker-compose up -d
```

### Manualmente

 Faça a instalação dos pacotes NPM
```sh
yarn
```
 Renomeie o arquivo .env.example para .env e substitua e coloque a URL onde será rodado o projeto
```sh
BOOKS_API_URL="http://localhost:3005"
GOODREADS_API_URL="http://localhost:3000"
``` 
Inicie o projeto
```sh
yarn dev
```
Para rodar os testes unitários
```sh
yarn test
```
Gerar a build para produção
```sh
yarn build
```

Iniciar a api e servir os arquivos
```sh
yarn start
```
# Api

## Listar todos os livros
### Request
`GET /api/books`

### Response
```json
    [{
         "objectId":"4trWWVgkZU",
         "name":"O Casamento",
         "createdAt":"2017-01-24T13:58:16.763Z",
         "updatedAt":"2017-07-03T12:59:29.868Z",
         "author":"Nelson Rodrigues",
         "isbn": "9788520926499",
         "pages":272,
         "curator":"Heloisa Seixas",
         "cover":{
            "__type":"File",
            "name":"2ff2ea7fe950b7e5ee5d32f65510d249_0b7738a0-4470-483e-9373-7a8581472359.jpg",
            "url":"https://static2.taglivros.com/2ff2ea7fe950b7e5ee5d32f65510d249_0b7738a0-4470-483e-9373-7a8581472359.jpg"
         },
         "edition":"Agosto de 2016",
         "blocked":false,
         "numRatings":506,
         "totalRatings":1938
    }]
```
## Listar um livro pelo ISBN

`GET /api/books/isbn`

### Response
```json
    {
         "objectId":"4trWWVgkZU",
         "name":"O Casamento",
         "createdAt":"2017-01-24T13:58:16.763Z",
         "updatedAt":"2017-07-03T12:59:29.868Z",
         "author":"Nelson Rodrigues",
         "isbn": "9788520926499",
         "pages":272,
         "curator":"Heloisa Seixas",
         "cover":{
            "__type":"File",
            "name":"2ff2ea7fe950b7e5ee5d32f65510d249_0b7738a0-4470-483e-9373-7a8581472359.jpg",
            "url":"https://static2.taglivros.com/2ff2ea7fe950b7e5ee5d32f65510d249_0b7738a0-4470-483e-9373-7a8581472359.jpg"
         },
         "edition":"Agosto de 2016",
         "blocked":false,
         "numRatings":506,
         "totalRatings":1938
    }

```
