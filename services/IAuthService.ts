import { UserInfo , UserRegisterInfo} from "~/store/types";


export default interface IAuthService {
  registerUser(userRegisterInfo: UserRegisterInfo): Promise<void>
}
