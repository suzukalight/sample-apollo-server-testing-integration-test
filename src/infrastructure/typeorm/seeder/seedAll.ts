import { Connection } from 'typeorm';

import { seedUsers } from './User';
import { seedAuth } from './Auth';

export const seedAll = async (dbConnection: Connection) => {
  const [admin, member, anonymous] = await seedUsers(dbConnection);

  await seedAuth(dbConnection, admin);
  await seedAuth(dbConnection, member);
  await seedAuth(dbConnection, anonymous);
};
