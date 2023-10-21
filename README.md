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
- Para trabalhar com cookies e, por exemplo, poder registrar a sessão de um usuário, será necessário instalar a lib / plugin `@fastify/cookie` como dependência de produção. Para isso, digite o comando:
```
$ npm i @fastify/cookie
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

## Configurando as Variáveis de Ambiente
- Crie o arquivo `.env` na raiz do projeto
- Instale a extensão `DotENV` (Publisher mikestead)
- Instale a lib `dotenv` como dependência de produção para poder ler o arquivo de configuração, para isso digite o comando:
```
$ npm i dotenv
```

## Trabalhando com Validação de Dados
- Repositório Oficial do `zod` no GitHub [https://github.com/colinhacks/zod]
- Instale a lib `zod` como dependência de produção, para isso digite o comando:
```
$ npm i zod
```
- Neste primeiro momento iremos utilizar a validação no arquivo `./src/env/index.ts`

## Trabalhando com Testes Automatizados
- Site Oficial do Vitest [https://vitest.dev/]
  - _Compatível com Jest, ESM, TypeScript e JSX. Além disso a configuração do Vitest é muito mais simples do que o Jest._
- Instale a lib `vitest` como dependência de desenvolvimento, para isso digite o comando:
```
$ npm i vitest -D
```
- Os testes devem ser implementados na pasta `test` criada na raiz do projeto
- Os arquivos de teste devem terminar com o nome e extensão `.spec.ts`
- Para executar os testes, basta digitar o comando:
```
$ npx vitest
```
- Com os testes em execução, basta pressionar a tecla `A` no terminal para que os testes possam ser executados novamente.
- Outra forma de executar os testes é configurar um novo `script` no `package.json` e chamá-lo da seguinte forma:
```
$ npm run test
ou
$ npm test
```

### Trabalhando com a lib Supertest
- A bibliteca `supertest` serve para fazer requisições, seja utilizando as libs `fastify`, `express`, ou qualquer outra para uso nos testes, sem precisar necessariamente colocar uma aplicação no ar. Neste caso, não é necessário executar o método `listen` e especificar uma porta para subir um serviço.
- Para instalar a lib `supertest` como dependência de desenvolvimento juntamente com o pacote de tipos do typescript `@types/supertest`, digite o comando:
```
$ npm i supertest @types/supertest -D
```

### Métodos do Vitest
- `describe`: Permite definir uma categorização para os testes. É possível definir subcategorias.
```ts
describe('Descrição da Categoria do Teste', () => {
  // Implementar os teste e/ou outra categorização
  describe('Descrição da SubCategoria do Teste', () => {
    // Implementar os teste e/ou outra categorização
  });
});
```
- `beforeAll`: Executa antes de todos os testes disponíveis a partir do nível que foi implementado. É recomendado utilizar `async` e `await` sempre que possível.
```ts
beforeAll(async () => {
  await () => {
    // Implementar rotina aqui
  }
});
```
- `afterAll`: Executa após todos os testes disponíveis a partir do nível que foi implementado. É recomendado utilizar `async` e `await` sempre que possível.
```ts
afterAll(async () => {
  await () => {
    // Implementar rotina aqui
  }
});
```
- `it`: Descreve o teste a ser implementado.
```ts
it('Descrição do teste a ser realizado', async () => {
  // Implemente o teste aqui
});
```
- `it.todo`: Define previamente a descrição de um teste, e o coloca em uma lista de atividades para fazer depois.
```ts
it('Descrição do teste a ser implementado posteriormente');
```
- `it.only`: Define um teste para ser executado com exclusividade, os demais testes que não possuem essa atribuição, ficarão suspensos.
```ts
it.only('Descrição do teste a ser realizado', async () => {
  // Implemente o teste aqui
});
```
- `it.skip`: Ignora o teste que possui a implementação desse método.
```ts
it.skip('Descrição do teste a ser implementado, o mesmo ficará suspenso', async () => {
  // Implemente o teste aqui
});
```

## Fazendo o Deploy da Aplicação
- Em um primeiro momento é necessário entender que o código TypeScript não pode ser 
O primeiro passo para conseguirmos fazer o deploy da nossa aplicação é entender que o nosso código está em TypeScript e nenhuma plataforma de Deploy de Node vai entender o código escrito em TypeScript. Então será necessário converter o código TypeScript em JavaScript.
- Para isso, vamos começar instalando a lib `tsup` como dependência de desenvolvimento. Digite o comando:
```
$ npm i tsup -D
```
- Segue o link do site oficial da lib `tsup`
  - [https://tsup.egoist.dev/]
- Para buildar o nosso projeto, convertendo o código TypeScript para JavaScript, abra o arquivo `package.json`, localize a sessão `scripts` e crie um novo script chamado `build`. Segue trecho do `json`:
```json
{
  "scripts": {
    "build": "tsup src -d build"
  },
}
```
- Após isso, digite o seguinte comando no terminal:
```
$ npm run build
```
- Se durante o build apresentar uma mensagem de erro semelhante ao que informei abaixo, será necessário criar um arquivo de configuração na raiz do projeto, com o nome `tsup.config.ts` informando os paths que apresentaram problema. Segue o exemplo da mensagem de erro:
```
X [ERROR] Could not resolve "better-sqlite3"

    node_modules/knex/lib/dialects/better-sqlite3/index.js:7:19:
      7 │     return require('better-sqlite3');
        ╵                    ~~~~~~~~~~~~~~~~

  You can mark the path "better-sqlite3" as external to exclude it from the bundle, which will
  remove this error. You can also surround this "require" call with a try/catch block to handle this       
  failure at run-time instead of bundle-time.
```
- No meu caso, apareceu a mensagem de erro para os seguintes paths: `better-sqlite3`, `pg`, `mysql2`, `mysql`, `tedious`, `oracledb`, `pg-query-stream`. Segue o modelo do arquivo `tsup.config.ts`:
```ts
// tsup.config.ts
import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => {
  return {
    external: [
      'better-sqlite3',
      'pg',
      'mysql2',
      'mysql',
      'tedious',
      'oracledb',
      'pg-query-stream',
    ],
  };
});
```
- Após a criação do arquivo de configuração, modifique o script `build` no arquivo `package.json` com a seguinte linha de comando:
```json
{
  "scripts": {
    "build": "tsup src -d build --config tsup.config.ts"
  },
}
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