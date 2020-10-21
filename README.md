# sample-apollo-server-testing-integration-test

apollo-server で GraphQL バックエンド開発をしている際の、統合テスト（Integration Testing）を行うための手法として、apollo-server-testing と sqlite を用いるサンプルです。

詳細については、こちらの記事で解説していますので、あわせてご覧ください；  
https://zenn.dev/suzukalight/articles/apollo-server-testing-sqlite

実践用に、signInEmailPassword mutation を実装しています。こちらの統合テストを test/integration ディレクトリに実装いただくハンズオンが可能です。

## 技術スタック

- Clean Architecture
- Node.js + TypeScript
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) w/Express + [apollo-server-testing](https://www.apollographql.com/docs/apollo-server/testing/testing/)
- [TypeORM](https://typeorm.io/) w/SQLite
- [GraphQL Code Generator](https://graphql-code-generator.com/)
- [Jest w/ts-jest](https://github.com/kulshekhar/ts-jest)

# 実践

## setup

```
yarn
yarn setup:env
```

## testing

```
yarn fix
yarn test
```

typecheck, lint, prettier, jest を実行できます。

## development

```
yarn dev
yarn db:seed
```

http://localhost:3000/graphql にて mutation の実行が可能です。

# そのほかの実装について

現在、deleteUser mutation のみを実装してあります。ほかのquery/mutation実装については、このサンプルの元になっている以下のリポジトリを参照願います；  
https://github.com/suzukalight/clean-architecture-nodejs-graphql-codegen
