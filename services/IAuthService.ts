import { UserInfo } from "~/store/types";


export default interface IAuthService {
  registerUser(userInfo: UserInfo): Promise<void>
}
