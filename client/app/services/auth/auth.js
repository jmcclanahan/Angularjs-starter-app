import angular from 'angular';
import AuthenticationService from './authentication.service';
import AuthorizationService from './authorization.service';
import TokenService from './token.service';

let authModule = angular.module('auth', [])

.factory('authenticationService', AuthenticationService)
.factory('authorizationService', AuthorizationService)
.factory('tokenService', TokenService);

export default authModule;
