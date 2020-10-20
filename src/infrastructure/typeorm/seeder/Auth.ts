import { Connection } from 'typeorm';

import { UserEntity } from '../../../entity/user/UserEntity';
import { encryptPassword } from '../../../entity/common/Password';
import { GqlAuthEmailPasswordRepository } from '../../../repository/typeorm/auth/repository/AuthEmailPassword';

/**
 * 指定されたユーザのEmail認証を作成
 * @param dbConnection
 * @param user
 */
export const seedAuth = async (dbConnection: Connection, user: UserEntity) => {
  const repository = new GqlAuthEmailPasswordRepository(dbConnection);

  const auth = {
    userId: user.getId().toString(),
    email: user.getEmail().toString(),
    passwordEncrypted: await encryptPassword('password1234'),
  };
  return repository.create(auth);
};
