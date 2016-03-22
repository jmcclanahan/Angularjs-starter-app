let AppRun = ($rootScope, $state, Restangular) => {
   "ngInject";
    Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    console.log('inside response', response.status);
    console.log('url', url);
    switch(response.status) {
      case 200:
        if (url.includes('login')) {
          saveTokens(response, url);
          $state.go('home');
        }
        break;
      case 401:
        $state.go('login');
        break;
      case 500:
        // redirect to error page
        break;
    }
    console.log('accessToken', localStorage['accessToken']);
    console.log('refreshToken', localStorage['refreshToken']);
    return response;
  });

  let saveTokens = (response, url) => {
    console.log('inside save tokens');
    const authorizationHeader = response.headers('Authorization');
    if (authorizationHeader) {
        const tokens = authorizationHeader.split(', ');
        const accessToken = tokens[0].slice(1).replace('Bearer ', '');
        const refreshToken = tokens[1].slice(0, -1).replace('Refresh ', '');
        localStorage['accessToken'] = accessToken;
        localStorage['refreshToken'] = refreshToken;
    }
  }

}

export default AppRun;
