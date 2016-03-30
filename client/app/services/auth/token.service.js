const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

class TokenService {
  constructor($window) {
    "ngInject";
    this.$window = $window;
  }

  /*
   *
   */
  decodeToken(token) {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('Not a valid token.');
    }

    let claims = parts[1];
    claims = claims.replace('-', '+').replace('_', '/');

    // angular.fromJson() parses a JSON string
    // atob() decodes a Base-64 string
    return angular.fromJson(atob(claims));
  }

  /*
   *
   */
  getTokenExpirationDate(token) {
    const decodedToken = this.decodeToken(token);

    if(typeof decodedToken.exp === "undefined") {
        return null;
    }

    let expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);

    return expirationDate;
  }

  /*
   *
   */
  isTokenExpired(token) {
    const expirationDate = this.getTokenExpirationDate(token);
    return new Date().valueOf() > expirationDate.valueOf();
  }

  /*
   *
   */
  getRolesAndPermissions(token) {
    const decodedToken = this.decodeToken(token);

    if(typeof decodedToken.RolesAndPermissions === "undefined") {
        return null;
    }

    return decodedToken.RolesAndPermissions;
  }

  getRefreshTokenPromise() {
    return this.refreshTokenPromise;
  }

  setRefreshTokenPromise(refreshTokenPromise) {
    this.refreshTokenPromise = refreshTokenPromise;
  }

  getRefreshToken () {
    return this.$window.localStorage[REFRESH_TOKEN];
  }

  setRefreshToken(token) {
    this.$window.localStorage[REFRESH_TOKEN] = token;
  }

  removeRefreshToken() {
    this.$window.localStorage.removeItem(REFRESH_TOKEN);
  }

  getAccessToken() {
    return this.$window.localStorage[ACCESS_TOKEN];
  }

  setAccessToken(token) {
    this.$window.localStorage[ACCESS_TOKEN] = token;
  }

  removeAccessToken() {
    this.$window.localStorage.removeItem(ACCESS_TOKEN);
  }
}

export default TokenService;
