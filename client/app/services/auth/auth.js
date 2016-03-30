import angular from 'angular';
import AuthenticationService from './authentication.service';
import AuthorizationService from './authorization.service';
import TokenService from './token.service';

let authModule = angular.module('authServices', [])

.service('authenticationService', AuthenticationService)
.service('authorizationService', AuthorizationService)
.service('tokenService', TokenService);

export default authModule;
