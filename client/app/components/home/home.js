import homeComponent from './home.component';

let homeModule = angular.module('home', [])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
})

.component('home', homeComponent);

export default homeModule;
