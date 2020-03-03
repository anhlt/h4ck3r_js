import Vue from 'vue'
import Component from 'vue-class-component'
import users from '~/store/user'
import { Dictionary } from 'vue-router/types/router'
import { UserInfo } from '~/store/types'


const AppProps = Vue.extend({
    props: {
        submitForm: {
            type: Function as () => any
        }
    }
})

@Component({})
export default class LoginForm extends AppProps {
    isLoading: boolean = false
    isFullPage: boolean = true

    userInfo: UserInfo = {
        email: '',
        password: '',
        rememberMe: true
    }
}
