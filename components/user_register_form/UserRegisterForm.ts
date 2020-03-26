
import Vue from 'vue'
import Component from 'vue-class-component'
import users from '~/store/user'
import { Dictionary } from 'vue-router/types/router'
import { UserRegisterInfo } from '~/store/types'


@Component({})
export default class UserRegisterForm extends Vue {
    isLoading: boolean = false
    isFullPage: boolean = true

    userRegisterInfo: UserRegisterInfo = {
        email: '',
        password: '',
        username: '',
        name: ''
    }

    private submit(): void {
        this.$emit("submited", this.userRegisterInfo);
    }
}
