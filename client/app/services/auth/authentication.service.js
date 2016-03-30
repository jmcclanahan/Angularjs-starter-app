class AuthenticationService {
  constructor($state, Restangular, tokenService) {
    "ngInject";
    this.$state = $state;
    this.Restangular = Restangular;
    this.tokenService = tokenService;
  }

  login(username, password) {
    const usernameAndPassword = username + ":" + password;
    const encodedUsernameAndPassword = btoa(usernameAndPassword); // btoa() encodes a string in base-64
    const authorizationHeader = 'Basic ' + encodedUsernameAndPassword;

    return this.Restangular.all('solar-api/api/public/login').customPOST({}, '', {}, {'Authorization': authorizationHeader});
  }

  logout() {
    this.tokenService.removeAccessToken();
    this.tokenService.removeRefreshToken();
    this.$state.go('login');
  };
}

export default AuthenticationService;
