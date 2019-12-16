import Vue from 'vue'
import Component from 'vue-class-component'
import users from '~/store/user'
import {getModule} from "vuex-module-decorators"

@Component({

})
export default class SignUp extends Vue {
  userStore = getModule(users, this.$store)


  get user() {
    return this.userStore.axles
  }
}