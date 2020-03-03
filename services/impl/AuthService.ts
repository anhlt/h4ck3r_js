import IAuthService from '~/services/IAuthService';
import { UserInfo } from '~/store/types';
import { injectable, inject } from 'inversify';
import { TYPES } from '~/modules/types'


@injectable()
export default class AuthService implements IAuthService {
  async registerUser(userInfo: UserInfo): Promise<void> {
    console.log('')
    return Promise.resolve();
  }

}
