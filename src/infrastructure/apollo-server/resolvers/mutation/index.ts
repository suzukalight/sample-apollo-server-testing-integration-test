import { MutationResolvers } from '../../../../schema/types';
import { User } from './User';
import { Auth } from './Auth';

export const Mutation: MutationResolvers = {
  ...User,
  ...Auth,
};
