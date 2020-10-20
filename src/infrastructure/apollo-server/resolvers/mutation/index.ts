import { MutationResolvers } from '../../../../schema/types';
import { User } from './User';

export const Mutation: MutationResolvers = {
  ...User,
};
