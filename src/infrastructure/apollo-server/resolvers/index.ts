import { DateTimeResolver } from 'graphql-scalars';
import { Resolvers } from '../../../schema/types';

import * as Entities from './entity';
import { Mutation } from './mutation';

export const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  ...Entities,
  Mutation,
};
