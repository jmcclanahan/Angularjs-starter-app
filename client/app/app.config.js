let AppConfig = ($httpProvider, $stateProvider, $injector) => {
  "ngInject";
  $httpProvider.interceptors.push('refreshTokenInterceptor');

}

export default AppConfig;
