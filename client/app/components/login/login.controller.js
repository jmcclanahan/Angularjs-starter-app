class LoginController {
  constructor(authenticationService) {
    "ngInject";
    this.name = 'login';
    this.authenticationService = authenticationService;
    this.username = "Admin";
    this.password = "Password";
  }

  login() {
    this.authenticationService.login(this.username, this.password);
  }

}

export default LoginController;
