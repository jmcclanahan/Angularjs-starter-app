import aboutComponent from './about.component';

let aboutModule = angular.module('about', [])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
})

.component('about', aboutComponent);

export default aboutModule;
