import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'lodash';
import 'restangular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppConfig from './app.config';
import AppRun from './app.run';
import RefreshTokenInterceptor from './services/auth/refreshToken.interceptor';
import AuthServices from './services/auth/auth';
import CompanyServices from './services/company/company';

angular.module('app', [
  uiRouter,
  'restangular',
  Common.name,
  Components.name,
  AuthServices.name,
  CompanyServices.name
])

.config(AppConfig)

.run(AppRun)

.factory('refreshTokenInterceptor', RefreshTokenInterceptor)

.component('app', AppComponent);
