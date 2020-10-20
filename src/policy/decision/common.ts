import { AuthenticationFailedError, UnauthorizedError } from '../../common/error';
import { ID } from '../../entity/common/ID';
import { RoleTypes } from '../../entity/common/Role';
import { UserEntity } from '../../entity/user/UserEntity';

export const denyUnauthenticated = (actor: UserEntity | null, message?: string) => {
  if (!actor) throw new AuthenticationFailedError(message);
};

export const denyWhenActorHasOnlyAnonymousRole = (actor: UserEntity | null, message?: string) => {
  denyUnauthenticated(actor, message);

  // anonumous ではないロールを1つも持っていない
  if (!actor?.getRoles().some((role) => !role.isEqual(RoleTypes.Anonymous))) {
    throw new UnauthorizedError(message);
  }
};

export const allowOnlyWhenActorHasMemberRole = (actor: UserEntity | null, message?: string) => {
  denyUnauthenticated(actor, message);

  if (!actor?.getRoles().some((role) => role.isEqual(RoleTypes.Member))) {
    throw new UnauthorizedError(message);
  }
};

export const allowOnlyWhenActorHasAdminOrMemberRole = (
  actor: UserEntity | null,
  message?: string,
) => {
  denyUnauthenticated(actor, message);

  if (actor?.getRoles().some((role) => role.isEqual(RoleTypes.Admin))) return;
  if (actor?.getRoles().some((role) => role.isEqual(RoleTypes.Member))) return;

  throw new UnauthorizedError(message);
};

export const allowOnlyWhenActorIsOwner = (
  ownerId: ID,
  actor: UserEntity | null,
  message?: string,
) => {
  denyUnauthenticated(actor, message);

  if (!actor?.getId().isEqual(ownerId))
    throw new UnauthorizedError(message ?? '作成した本人しか操作することはできません');
};
