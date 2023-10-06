#### Ignite - Trilha Node.js
# 🚀 Projeto 02 - Criando API REST com Node.js

## Sobre

- Nesse módulo iremos desenvolver uma API REST, mas dessa vez utilizando o Fastify, Knex, TypeScript e outras ferramentas para auxiliar durante o desenvolvimento.

## Iniciando o ambiente de desenvolvimento

- Para criar o arquivo de configuração `package.json` digite o seguinte comando:
```
$ npm init -y
```

## Configurando o TypeScript

- Site oficial do TypeScript [https://typescriptlang.org]
- Para instalar as libs `typescript`, `@types/node` e `tsx` como dependência de desenvolvimento digite o seguinte comando:
  - _Onde `typescript` é a lib principal._
  - _`@types/node` é a lib de tipos._
  - _e `tsx` é a lib que automatiza a conversão dos arquivos TypeScript para JavaScript._
```
$ npm i -D typescript @types/node tsx
```
- Para criar o arquivo de configurações do `typescript` chamado `tsconfig.json` digite o seguinte comando:
  - _Esse comando automatiza a criação do arquivo._
```
$ npx tsc --init
```
- Para converter um arquivo `typescript` em `javascript`, digite o seguinte comando:
  - _Onde o arquivo `src/index.ts` deverá ser substituído pelo arquivo `typescript` correspondente._
```
$ npx tsc src/index.ts
```
- Para executar um arquivo `typescript` diretamente sem precisar converter para `javascript`, digite o seguinte comando:
```
$ npx tsx src/server.ts
```

## Configurando o Fastify
- Para instalar a lib `fastify` digite o seguinte comando:
```
$ npm i fastify
```

## Como Executar

- Crie uma pasta para o projeto
- Acesse a pasta
- Faça o clone do projeto
```
$ git clone https://github.com/fabiosvf/trilha-nodejs-projeto-02.git .
```
- Instale as dependências do projeto
```
$ npm i
```
- Execute o serviço
```
$ npm run dev
```