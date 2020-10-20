import { Connection } from 'typeorm';
import { Maybe } from '../../schema/types';
import { UserEntity } from '../../entity/user/UserEntity';

export interface ApolloServerContext {
  dbConnection: Connection;
  actor: Maybe<UserEntity>;
}
