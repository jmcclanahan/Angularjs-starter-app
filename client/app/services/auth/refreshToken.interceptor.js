let RefreshTokenService = function($injector) {
  "ngInject";
  let request = (config) => {

    let $state = $injector.get('$state');
    let $http = $injector.get('$http');
    let authorizationService = $injector.get('authorizationService');
    let tokenService = $injector.get('tokenService');
    const accessToken = tokenService.getAccessToken();

    // If public route we don't need to do anything
    if (config.url.includes('/public')) {
      return config;
    }

    if (!accessToken) {
      return $state.go('login');
    }

    if (tokenService.isTokenExpired(accessToken)) {
      // Access Token is expired, so request a new one
      if (!tokenService.getRefreshTokenPromise()) {
        tokenService.setRefreshTokenPromise(authorizationService.refreshToken());
      }

      return tokenService.getRefreshTokenPromise().then(function (response) {
        const formattedAccessToken = `Bearer ${accessToken}`;
        config.headers = config.headers || {};
        config.headers.Authorization = formattedAccessToken;
        tokenService.setRefreshTokenPromise(null);
        return config;
      }, function (error) {
        $state.go('login');
      });
    } else {
      // Access Token not expired, so add Access Token to Auth Header
      const formattedAccessToken = `Bearer ${accessToken}`;
      config.headers = config.headers || {};
      config.headers.Authorization = formattedAccessToken;
      return config;
    }
  }

  return { request };
};

export default RefreshTokenService;
