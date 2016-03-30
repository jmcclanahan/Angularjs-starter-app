import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Navbar from './navbar/navbar';
import Wizard from './wizard/wizard';

let commonModule = angular.module('app.common', [
  uiRouter,
  Navbar.name,
  Wizard.name
]);

export default commonModule;
