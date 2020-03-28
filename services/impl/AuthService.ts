import IAuthService from '~/services/IAuthService';
import { UserInfo, UserRegisterInfo } from '~/store/types';
import { injectable, inject } from 'inversify';
import { SERVICE_IDENTIFIER } from '~/modules/identifer'
import { NuxtAxiosInstance } from '@nuxtjs/axios';


@injectable()
export default class AuthService implements IAuthService {

  private axios: NuxtAxiosInstance;
  public constructor(
    @inject(SERVICE_IDENTIFIER.AXIOS) client: NuxtAxiosInstance
  ) {
    this.axios = client;
  }

  async registerUser(userRegisterInfo: UserRegisterInfo): Promise<void> {
    console.log('registed')
    this.axios.post('/api/user_register', userRegisterInfo)
    return Promise.resolve();
  }

}
