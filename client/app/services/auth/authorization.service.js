class AuthorizationService {
  constructor($state, Restangular, tokenService) {
    "ngInject";
    this.$state = $state;
    this.Restangular = Restangular;
    this.tokenService = tokenService;
  }

  isAuthorized() {
    const accessToken = this.tokenService.getAccessToken();

    if (accessToken) {
      return !this.tokenService.isTokenExpired(accessToken);
    } else {
      return false;
    }
  }

  hasRole(roleToCheck) {
    const accessToken = this.tokenService.getAccessToken();
    const rolesAndPermissions = this.tokenService.getRolesAndPermissions(accessToken);

    for (var role in rolesAndPermissions) {
      if (roleToCheck === role) {
        return true;
      }
    }

    return false;
  }

  hasPermission(permissionToCheck) {
    const accessToken = this.tokenService.getAccessToken();
    const rolesAndPermissions = this.tokenService.getRolesAndPermissions(accessToken);

    for (var role in rolesAndPermissions) {
      for (var permission of rolesAndPermissions[role]) {
        if (permissionToCheck === permission) {
          return true;
        }
      }
    }

    return false;
  }

  refreshToken() {
    const refreshToken = this.tokenService.getRefreshToken();

    if (refreshToken) {
      const authorizationHeader =  `Refresh ${refreshToken}`;

      return this.Restangular.one('solar-api/api/secured/refresh').customPOST({}, '', {}, {'Authorization': authorizationHeader})
        .then((response) => {
          const newAccessToken = response.headers('Authorization').replace('Bearer ', '');
          this.tokenService.setAccessToken(newAccessToken);
          return response;
        }, (error) => {
          this.tokenService.removeAccessToken();
          this.tokenService.removeRefreshToken();
          this.$state.go('login');
        });
    } else {
      this.$state.go('login');
    }
  }
};

export default AuthorizationService;
