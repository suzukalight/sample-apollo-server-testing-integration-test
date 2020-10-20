import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { User } from '../../repository/typeorm/user/entity/User';

export const createDbConnection = async () => {
  return createConnection({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [User],
    synchronize: true,
    logging: false,
  });
};
