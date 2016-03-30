class NavbarController {
  constructor($state, authorizationService, authenticationService) {
    "ngInject";
    this.name = 'navbar';
    this.username = "Admin";
    this.password = "Password";
    this.$state = $state;
    this.authorizationService = authorizationService;
    this.authenticationService = authenticationService;
  }

  logout() {
    this.authenticationService.logout();
  }

  isAuthorized() {
    return this.authorizationService.isAuthorized();
  }
}

export default NavbarController;
