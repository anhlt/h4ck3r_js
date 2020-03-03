import Vue from 'vue'
import Component from 'vue-class-component'
import users from '~/store/user'
import { Dictionary } from 'vue-router/types/router'
import { UserInfo } from '~/store/types'



@Component({
    middleware: ['auth'],
})
export default class NavBar extends Vue {
    isLoading: boolean = false
    isFullPage: boolean = true

    async logout(): Promise<void> {
        await this.$auth.logout().then(() => {
            console.log("Logged out")
        }).catch(err => {
            console.log("Login Failed")
        })
    }

}
