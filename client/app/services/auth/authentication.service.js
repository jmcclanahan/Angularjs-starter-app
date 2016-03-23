let AuthenticationService = function($state, Restangular, tokenService) {
  "ngInject";

  let login = (username, password) => {
    const usernameAndPassword = username + ":" + password;
    const encodedUsernameAndPassword = btoa(usernameAndPassword); // btoa() encodes a string in base-64
    const authorizationHeader = 'Basic ' + encodedUsernameAndPassword;

    Restangular.all('solar-api/api/public/login').customPOST({}, '', {}, {'Authorization': authorizationHeader}).then(function(response) {
    });
  };

  let logout = () => {
    tokenService.removeAccessToken();
    tokenService.removeRefreshToken();
    $state.go('login');
  };

  return { login, logout };
};

export default AuthenticationService;
