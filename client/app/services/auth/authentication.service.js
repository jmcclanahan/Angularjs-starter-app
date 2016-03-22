let AuthenticationService = function($state, Restangular) {
  "ngInject";

  let login = (username, password) => {
    const usernameAndPassword = username + ":" + password;
    const encodedUsernameAndPassword = btoa(usernameAndPassword); // btoa() encodes a string in base-64
    const authorizationHeader = 'Basic ' + encodedUsernameAndPassword;

    Restangular.all('solar-api/api/public/login').customPOST({}, '', {}, {'Authorization': authorizationHeader}).then(function(response) {
    });
  };

  let logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    $state.go('login');
  };

  return { login, logout };
};

export default AuthenticationService;
