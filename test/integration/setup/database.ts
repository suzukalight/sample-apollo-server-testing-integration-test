import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

import { User } from '../../../src/repository/typeorm/user/entity/User';
import { AuthEmailPassword } from '../../../src/repository/typeorm/auth/entity/AuthEmailPassword';
import { seedAll } from '../../../src/infrastructure/typeorm/seeder/seedAll';

// ランダムなDB名を生成
export const getRandomDbPath = () => `./test_db/${uuidv4()}.sqlite`;

// 各テストごとに独立したDBを作成し、テストの独立性を担保する
export const createDbConnection = async (randomDbPath: string) =>
  createConnection({
    type: 'sqlite',
    name: randomDbPath,
    database: randomDbPath,
    entities: [User, AuthEmailPassword],
    synchronize: true,
  });

// DBファイルを削除
export const deleteDbFile = (dbPath: string) => {
  fs.unlinkSync(dbPath);
};

export { Connection, seedAll };
