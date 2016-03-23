let AuthorizationService = function($state, Restangular, tokenService) {
  "ngInject";

  let isAuthorized = () => {
    const accessToken = localStorage['accessToken'];
    if (accessToken) {
      return !tokenService.isTokenExpired(accessToken);
    } else {
      return false;
    }
  };

  let hasRole = (roleToCheck) => {
    const rolesAndPermissions = tokenService.getRolesAndPermissions(localStorage['accessToken']);

    for (var role in rolesAndPermissions) {
      if (roleToCheck === role) {
        return true;
      }
    }

    return false;
  };

  let hasPermission = (permissionToCheck) => {
    const rolesAndPermissions = tokenService.getRolesAndPermissions(localStorage['accessToken']);

    for (var role in rolesAndPermissions) {
      for (var permission of rolesAndPermissions[role]) {
        if (permissionToCheck === permission) {
          return true;
        }
      }
    }

    return false;
  };

  let refreshToken = () => {
    const refreshToken = localStorage['refreshToken'];

    if (refreshToken) {
      const authorizationHeader =  `Refresh ${refreshToken}`;

      return Restangular.one('solar-api/api/secured/refresh').customPOST({}, '', {}, {'Authorization': authorizationHeader}).then(function(response) {
        const newAccessToken = response.headers('Authorization').replace('Bearer ', '');
        localStorage['accessToken'] = newAccessToken;
        return response;
      }, function(error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        $state.go('login');
      });
    } else {
      $state.go('login');
    }
  };

  return { isAuthorized, hasRole, hasPermission, refreshToken };
};

export default AuthorizationService;
