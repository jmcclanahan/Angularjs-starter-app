import aboutComponent from './about.component';

let aboutModule = angular.module('about', [])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/',
      template: '<about></about>'
    });
})

.component('about', aboutComponent);

export default aboutModule;
