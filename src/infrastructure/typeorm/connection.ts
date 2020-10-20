import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { User } from '../../repository/typeorm/user/entity/User';
import { AuthEmailPassword } from '../../repository/typeorm/auth/entity/AuthEmailPassword';

export const createDbConnection = async () => {
  return createConnection({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [User, AuthEmailPassword],
    synchronize: true,
    logging: false,
  });
};
