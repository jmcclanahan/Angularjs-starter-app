class LoginController {
  constructor(authenticationService, $state) {
    "ngInject";
    this.name = 'login';
    this.authenticationService = authenticationService;
    this.$state = $state;
    this.username = "Admin";
    this.password = "Password";
  }

  login() {
    this.authenticationService.login(this.username, this.password).then((response) => {
      console.log('login success!', response);
      this.$state.go('home');
    }, (error) => {
      console.log('login error!', error);
    });
  }

}

export default LoginController;
