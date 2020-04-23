import { Vue, Component, Prop } from 'vue-property-decorator'

import users from '~/store/user'

import LoginForm from '~/components/login_form/LoginForm'
import { UserInfo } from '~/store/types'
import { Context } from '@nuxt/types'
import { ClientData } from '~/services/IAuthService';
import IAuthService from '~/services/IAuthService'
import { SERVICE_IDENTIFIER } from '~/modules/identifer'



@Component({
  middleware: ['auth'],

  async asyncData(context: Context): Promise<ClientData> {
    const authService: IAuthService = context.app.$container.get<IAuthService>(SERVICE_IDENTIFIER.AUTH_SERVICE)

    return authService.getClientInfo(context.route.query)
  }

})
export default class Authorize extends Vue {

  data?: {
    name: string
    description: number
  }

  mounted() {
    this.confirmCustom()
  }

  async issueAuthorizationCode() {
    const authService: IAuthService = this.$container.get<IAuthService>(SERVICE_IDENTIFIER.AUTH_SERVICE)
    return await authService.issueAuthorizationCode(this.$route.query)
  }


  confirmCustom() {

    if (this.data) {
      this.$buefy.dialog.confirm({
        title: 'Request permission',
        message: `${this.data.description}`,
        cancelText: 'Disagree',
        confirmText: 'Agree',
        type: 'is-success',
        onConfirm: () => {
          this.issueAuthorizationCode().then((result) => {
            console.log(result.data.redirectUri)
            this.$buefy.toast.open('User agreed')
            window.location.href = result.data.redirectUri
          })
        }
      })
    }


  }

}