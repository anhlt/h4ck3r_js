import { UserInfo, UserRegisterInfo } from "~/store/types";

export interface ServerResponse {
  data: ClientData
}

export interface ClientData {
  data: {
    name: string
    description: number
  }
}

export interface AuthorizationCodeData {
  data: {
    code: string
  }
}


export default interface IAuthService {
  registerUser(userRegisterInfo: UserRegisterInfo): Promise<void>
  getClientInfo(params: { [key: string]: string | (string | null)[] }): Promise<ClientData>
  issueAuthorizationCode(params: { [key: string]: string | (string | null)[] }): Promise<AuthorizationCodeData>
}
