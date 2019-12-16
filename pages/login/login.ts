import Vue from 'vue'
import Component from 'vue-class-component'
import users from '~/store/user'

import LoginForm from '~/components/LoginForm'
import {UserInfo} from '~/store/interfaces'

@Component({
  layout: 'guest',
  middleware: ['auth'],
  components: {
    LoginForm
  }
})
export default class Login extends Vue {
  isLoading: boolean = false
  isFullPage: boolean = true


  async clickMe(loginInfo: UserInfo): Promise<void> {
    await this.$auth.loginWith('local', {
      data: loginInfo
    }).then(() => {
      console.log("Logged in")
    }).catch(err => {
      console.log("Login Failed")

    })
  }

}