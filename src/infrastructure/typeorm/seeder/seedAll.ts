import { Connection } from 'typeorm';

import { seedUsers } from './User';

export const seedAll = async (dbConnection: Connection) => {
  await seedUsers(dbConnection);
};
