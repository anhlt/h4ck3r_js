import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { UserInfo } from '~/store/types'

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class User extends VuexModule {

  userInfo?: UserInfo

  @Mutation
  setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo
  }

  get loggedIn(): boolean {
    if (this.userInfo) {
      return true
    } else {
      return false
    }
  }

  get user(): UserInfo | undefined {
    return this.userInfo
  }

  @Action
  loggin() {

  }

}
