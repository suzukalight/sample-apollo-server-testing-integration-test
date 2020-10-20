import { MutationResolvers } from '../../../../../schema/types';
import { ApolloServerContext } from '../../../types';
import { deleteUser } from './deleteUser';

export const User: MutationResolvers<ApolloServerContext> = {
  ...deleteUser,
};
