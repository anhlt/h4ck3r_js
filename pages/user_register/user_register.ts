import Vue from 'vue'
import Component from 'vue-class-component'
import users from '~/store/user'
import { getModule } from "vuex-module-decorators"
import UserRegisterForm from '~/components/user_register_form/UserRegisterForm'


@Component({
  layout: 'guest',
  middleware: ['auth'],
  auth: false,
  components: {
    UserRegisterForm
  }
})
export default class SignUp extends Vue {
  userStore = getModule(users, this.$store)


  get user() {
    return this.userStore.loggedIn
  }

  async doSomething() {
    await Promise.resolve("OK");
    alert("done");
  }
}
