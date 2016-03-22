let AppConfig = (RestangularProvider, $httpProvider, $injector) => {
  "ngInject";
  $httpProvider.interceptors.push('refreshTokenInterceptor');
}

export default AppConfig;
