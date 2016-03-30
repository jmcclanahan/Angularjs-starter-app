import samplewizardComponent from './samplewizard.component';

let samplewizardModule = angular.module('samplewizard', [])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('samplewizard', {
      url: '/samplewizard',
      template: '<samplewizard></samplewizard>'
    })
    .state('samplewizard.demographics', {
      template: '<samplestep></samplestep>'
    })
    .state('samplewizard.companyTypes', {
      template: '<h1>Company Types Route</h1>'
    })
    .state('samplewizard.lineOfBusiness', {
      template: '<h1>Line Of Business Route</h1>'
    });
})

.component('samplewizard', samplewizardComponent);


export default samplewizardModule;
