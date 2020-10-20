import { MutationResolvers } from '../../../../../schema/types';
import { DeleteUserInteractor } from '../../../../../usecase/user/DeleteUser';
import { allowOnlyWhenActorHasAdminOrMemberRole } from '../../../../../policy/decision/common';
import { ApolloServerContext } from '../../../types';
import { GqlUserRepository } from '../../../../../repository/typeorm/user/repository/User';
import { GqlDeleteUserPresenter } from '../../../../../presenter/user/DeleteUser';

export const deleteUser: MutationResolvers<ApolloServerContext> = {
  deleteUser: async (_parent, args, { dbConnection, actor }) => {
    allowOnlyWhenActorHasAdminOrMemberRole(actor);

    const repository = new GqlUserRepository(dbConnection);
    const presenter = new GqlDeleteUserPresenter();
    const usecase = new DeleteUserInteractor(repository, presenter);

    await usecase.handle(args.input!, actor!);

    return presenter.getResponse();
  },
};
