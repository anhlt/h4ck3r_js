import IAuthService from '~/services/IAuthService';
import { UserInfo, UserRegisterInfo } from '~/store/types';
import { injectable, inject } from 'inversify';
import { SERVICE_IDENTIFIER } from '~/modules/identifer'


@injectable()
export default class AuthService implements IAuthService {
  async registerUser(userRegisterInfo: UserRegisterInfo): Promise<void> {
    console.log('registed')
    return Promise.resolve();
  }

}
