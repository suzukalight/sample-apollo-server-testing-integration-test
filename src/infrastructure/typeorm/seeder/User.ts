import { Connection } from 'typeorm';

import { RoleTypes, Role, RoleType } from '../../../entity/common/Role';
import { UserRepository } from '../../../usecase/user/interface/repository';
import { GqlUserRepository } from '../../../repository/typeorm/user/repository/User';

export const seedUser = async (repository: UserRepository, email: string, roles: RoleType[]) => {
  const user = { email };
  const userEntity = await repository.create(user);
  userEntity.updateRoles(roles.map((role) => new Role(role)));
  await repository.update(userEntity);

  return userEntity;
};

export const seedUsers = async (dbConnection: Connection) => {
  const repository = new GqlUserRepository(dbConnection);

  const adminEntity = await seedUser(repository, 'admin@email.com', [
    RoleTypes.Admin,
    RoleTypes.Member,
  ]);
  const memberEntity = await seedUser(repository, 'member@email.com', [RoleTypes.Member]);
  const anonymousEntity = await seedUser(repository, 'anonymous@email.com', [RoleTypes.Anonymous]);

  return [adminEntity, memberEntity, anonymousEntity];
};
