import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
  uiRouter,
  Navbar.name,
  Sidebar.name
]);

export default commonModule;
