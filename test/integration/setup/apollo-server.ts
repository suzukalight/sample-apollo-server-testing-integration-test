import dotenv from 'dotenv';
import path from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';
import { Connection } from 'typeorm';

import { UserDto } from '../../../src/entity/user/UserDto';
import { UserEntity } from '../../../src/entity/user/UserEntity';
import { resolvers } from '../../../src/infrastructure/apollo-server/resolvers';

dotenv.config();

const getContext = async (dbConnection: Connection, actor?: UserDto) => ({
  dbConnection,
  actor: actor ? new UserEntity(actor) : null,
});

export const createApolloServerForTesting = (
  dbConnection: Connection,
  actor?: UserDto,
): ApolloServerTestClient => {
  // graphql-codegen でバンドルしたスキーマファイルを使用
  const schema = loadSchemaSync(path.join(__dirname, '../../../src/schema/schema.graphql'), {
    loaders: [new GraphQLFileLoader()],
  });

  // resolverをスキーマと連結
  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
  });

  // ApolloServerでGraphQLサーバを起動
  const server = new ApolloServer({
    schema: schemaWithResolvers,
    context: () => getContext(dbConnection, actor),
  });

  // テスト用のGraphQLクライアントを生成
  const testClient = createTestClient(server);
  return testClient;
};
