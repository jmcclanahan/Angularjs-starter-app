import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'lodash';
import 'restangular';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import AppConfig from './app.config';
import AppRun from './app.run';
import RefreshTokenInterceptor from './services/auth/refreshToken.interceptor';
import IsolateForm from './utilities/isolateForm.directive';

angular.module('app', [
  uiRouter,
  'restangular',
  Common.name,
  Components.name,
  Services.name
])

.config(AppConfig)

.run(AppRun)

.factory('refreshTokenInterceptor', RefreshTokenInterceptor)

.directive('isolateForm', IsolateForm.directiveFactory)

.component('app', AppComponent);
