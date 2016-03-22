let TokenService = function() {
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

  return { isTokenExpired, getRolesAndPermissions, getRefreshTokenPromise, setRefreshTokenPromise };
}

export default TokenService;
