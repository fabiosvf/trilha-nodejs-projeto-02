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

## Configurando o Eslint
- Para instalar as libs `eslint` e `@rocketseat/eslint-config` (pré set de configurações da Rocketseat) como dependência de desenvolvimento, digite o comando:
```
$ npm i -D eslint @rocketseat/eslint-config
```
- Crie o arquivo `.eslintrc.json` na raiz do projeto, onde ficarão as configurações
- Instale a extensão `ESLint` (Publisher Microsoft) no VS Code
- No arquivo `settings.json` do VSCode, certifique-se de existir a seguinte configuração:
```json
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
},
"[typescript]": {
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
},
```

## Configurando um Banco de Dados Relacional
- Site Oficial do Knex.js [https://knexjs.org/guide/]
- Para instalar o Query Builder `Knex.js` e o driver do Banco de Dados `SQLite` como dependência de produção, digite o comando:
```
$ npm install knex sqlite3
```

## Criando uma Migrate
- Crie o arquivo de configuração `knexfile.ts` na raiz do projeto
- Para o `knex` entender typescript para a criação de migrations, será necessário utilizar o script `knex` criado no arquivo `package.json`
- Agora, para executar a criação de uma migration digite o comando:
  - _onde `create-transactions` é o nome da migration que está sendo criada._
```
$ npm run knex -- migrate:make create-transactions
```
- Para executar uma migration digite o comando:
```
$ npm run knex -- migrate:latest
```
- Para desfazer uma migration digite o comando:
  - _apenas execute esse comando se a migration NÃO foi comitada no repositório da equipe._
```
$ npm run knex -- migrate:rollback
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