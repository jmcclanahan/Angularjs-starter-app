let TokenService = function($window) {
  "ngInject";

  const ACCESS_TOKEN  = 'accessToken';
  const REFRESH_TOKEN = 'refreshToken';

  /*
   *
   */
  let decodeToken = (token) => {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('Not a valid token.');
    }

    let claims = parts[1];
    claims = claims.replace('-', '+').replace('_', '/');

    // angular.fromJson() parses a JSON string
    // atob() decodes a Base-64 string
    return angular.fromJson(atob(claims));
  };

  /*
   *
   */
  let getTokenExpirationDate = (token) => {
    const decodedToken = decodeToken(token);

    if(typeof decodedToken.exp === "undefined") {
        return null;
    }

    let expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);

    return expirationDate;
  };

  /*
   *
   */
  let isTokenExpired = (token) => {
    const expirationDate = getTokenExpirationDate(token);
    return new Date().valueOf() > expirationDate.valueOf();
  };

  /*
   *
   */
  let getRolesAndPermissions = (token) => {
    const decodedToken = decodeToken(token);

    if(typeof decodedToken.RolesAndPermissions === "undefined") {
        return null;
    }

    return decodedToken.RolesAndPermissions;
  };

  let getRefreshTokenPromise = () => {
    return this.refreshTokenPromise;
  }

  let setRefreshTokenPromise = (refreshTokenPromise) => {
    this.refreshTokenPromise = refreshTokenPromise;
  }

  let getRefreshToken = () => {
    return $window.localStorage[REFRESH_TOKEN];
  }

  let setRefreshToken = (token) => {
    $window.localStorage[REFRESH_TOKEN] = token;
  }

  let removeRefreshToken = () => {
    $window.localStorage.removeItem(REFRESH_TOKEN);
  }

  let getAccessToken = () => {
    return $window.localStorage[ACCESS_TOKEN];
  }

  let setAccessToken = (token) => {
    $window.localStorage[ACCESS_TOKEN] = token;
  }

  let removeAccessToken = () => {
    $window.localStorage.removeItem(ACCESS_TOKEN);
  }

  return { isTokenExpired, getRolesAndPermissions, getRefreshTokenPromise, setRefreshTokenPromise,
           getRefreshToken, setRefreshToken, removeRefreshToken, getAccessToken, setAccessToken, removeAccessToken };
}

export default TokenService;
