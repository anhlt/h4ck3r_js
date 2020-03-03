import { Container } from 'inversify';
import "reflect-metadata";
import { TYPES } from '~/modules/types';
import IAuthService from '~/services/IAuthService';
import AuthService from '~/services/impl/AuthService';

let container = new Container();

container.bind<IAuthService>(TYPES.AUTH_SERVICE).to(AuthService)

export default container;
