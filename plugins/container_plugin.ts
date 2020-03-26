import { Plugin } from '@nuxt/types'

import { Container } from 'inversify';
import "reflect-metadata";
import { SERVICE_IDENTIFIER } from '~/modules/identifer';
import IAuthService from '~/services/IAuthService';
import AuthService from '~/services/impl/AuthService';
import { NuxtAxiosInstance } from '@nuxtjs/axios';





declare module 'vue/types/vue' {
  interface Vue {
    $container: Container
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $container: Container
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $container: Container
  }
}

const myPlugin: Plugin = (context, inject) => {

  let container = new Container();

  container.bind<IAuthService>(SERVICE_IDENTIFIER.AUTH_SERVICE).to(AuthService)
  container.bind<NuxtAxiosInstance>(SERVICE_IDENTIFIER.AXIOS).toConstantValue(context.$axios)
  inject('container', container);
}

export default myPlugin