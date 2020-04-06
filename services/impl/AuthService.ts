import IAuthService, { AuthorizationCodeData, ClientData, ServerResponse } from '~/services/IAuthService';
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
    this.axios.post('/api/v1/user_register', userRegisterInfo)
    return Promise.resolve();
  }

  async getClientInfo(params: { [key: string]: string | (string | null)[] }): Promise<ClientData> {

    return this.axios.get<ClientData>('/api/v1/client_info', {
      params: params,
    }).then(response => { return response.data })
  }

  async issueAuthorizationCode(params: { [key: string]: string | (string | null)[] }): Promise<AuthorizationCodeData> {
    let bodyFormData = new FormData();

    for (var key in params) {
      bodyFormData.append(key, params[key] as string);
    }
    console.log(bodyFormData)
    return this.axios.post<AuthorizationCodeData>('/api/v1/authorize', bodyFormData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => { return response.data })
  }



}
