import { PropertyRequiredError } from '../../common/error';
import { denyIllegalEmail } from '../common/Email';
import { denyIllegalPassword } from '../common/Password';
import { TimeStampTypes, denyDoesNotHaveRequiredProperties } from '../utils';

export type AuthEmailPasswordDto = {
  email: string;
  passwordEncrypted: string;
  userId: string;
} & TimeStampTypes;

export const denyIllegalAuthEmailPasswordDto = (auth: AuthEmailPasswordDto) => {
  if (!auth) throw new PropertyRequiredError('user');
  denyDoesNotHaveRequiredProperties(auth, ['email', 'passwordEncrypted', 'userId']);
  denyIllegalEmail(auth.email);
  denyIllegalPassword(auth.passwordEncrypted);
};
