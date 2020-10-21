import { ApolloServerTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server-express';

import {
  createDbConnection,
  Connection,
  getRandomDbPath,
  seedAll,
  deleteDbFile,
} from '../../setup/database';
import { createApolloServerForTesting } from '../../setup/apollo-server';

const SIGN_IN_EMAIL_PASSWORD = gql`
  mutation SignInEmailPassword($input: SignInEmailPasswordRequest) {
    signInEmailPassword(input: $input) {
      user {
        id
        email
      }
      token
    }
  }
`;

describe('signInEmailPassword', () => {
  const randomDbPath = getRandomDbPath(); // テストごとに固有のファイルを作成
  let dbConnection: Connection;
  let testClient: ApolloServerTestClient | undefined;

  beforeAll(async () => {
    dbConnection = await createDbConnection(randomDbPath); // DBの作成とマイグレーション
    await seedAll(dbConnection); // UserをDBに流し込む
    testClient = createApolloServerForTesting(dbConnection); // Adminをactorとしてサーバを起動
  });

  afterAll(async () => {
    await dbConnection.close();
    deleteDbFile(randomDbPath); // DBファイルを削除し、テストごとにDBを破棄
  });

  test.skip('OK: ログインに成功し、ユーザ情報とトークンを取得できた', async () => {});
  test.skip('NG: 存在しないemailを指定した', async () => {});
  test.skip('NG: 登録済みのemailと、誤ったpasswordを指定した', async () => {});
});
