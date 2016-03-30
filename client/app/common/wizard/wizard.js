import wizardComponent from './wizard.component';

let wizardModule = angular.module('wizard', [])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('wizard', {
      url: '/wizard',
      template: '<wizard></wizard>'
    });
})

.component('wizard', wizardComponent);


export default wizardModule;
