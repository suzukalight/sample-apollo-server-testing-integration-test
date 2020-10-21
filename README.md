# sample-apollo-server-testing-integration-test

apollo-server で GraphQL バックエンド開発をしている際の、統合テスト（Integration Testing）を行うための手法として、apollo-server-testing と sqlite を用いるサンプルです。

技術の詳細については、こちらの記事で解説しています；  
https://zenn.dev/suzukalight/articles/apollo-server-testing-sqlite

現在、deleteUser mutation のみを実装してあります。ほかのquery/mutation実装については、このサンプルの元になっている以下のリポジトリを参照願います；  
https://github.com/suzukalight/clean-architecture-nodejs-graphql-codegen

実践用に、下記のブランチにて、signInEmailPassword mutation を実装しています。こちらの統合テストを test/integration ディレクトリに実装いただくハンズオンが可能です；  
https://github.com/suzukalight/sample-apollo-server-testing-integration-test/pull/1

# 概要

- Clean Architecture
- Node.js + TypeScript
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) w/Express + [apollo-server-testing](https://www.apollographql.com/docs/apollo-server/testing/testing/)
- [TypeORM](https://typeorm.io/) w/SQLite
- [GraphQL Code Generator](https://graphql-code-generator.com/)
- [Jest w/ts-jest](https://github.com/kulshekhar/ts-jest)

# setup

```
yarn
yarn setup:env
```

# testing

```
yarn fix
yarn test
```

typecheck, lint, prettier, jest を実行できます。

# development

```
yarn dev
yarn db:seed
```

http://localhost:3000/graphql にて mutation の実行が可能です。
