import Vue from 'vue'
import Component from 'vue-class-component'
import users from '~/store/user'
import { getModule } from "vuex-module-decorators"
import UserRegisterForm from '~/components/user_register_form/UserRegisterForm'
import IAuthService from '@/services/IAuthService';
import { SERVICE_IDENTIFIER } from '@/modules/identifer';
import { UserInfo, UserRegisterInfo } from '~/store/types'


@Component({
  layout: 'guest',
  middleware: ['auth'],
  auth: false,
  components: {
    UserRegisterForm
  }
})
export default class UserRegister extends Vue {
  userStore = getModule(users, this.$store)
  private _authService! : IAuthService;

  created(): void {
    console.log("UserRegister created")
    console.log(this)
    this._authService = this.$container.get<IAuthService>(SERVICE_IDENTIFIER.AUTH_SERVICE)
  }

  get user() {
    return this.userStore.loggedIn
  }


  private async submitForm(userRegisterInfo: UserRegisterInfo) {
    await Promise.resolve("OK");
    await this._authService.registerUser(userRegisterInfo)
    console.log(userRegisterInfo);
  }
}
