import samplestepComponent from './samplestep.component';

let samplestepModule = angular.module('samplestep', [])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('samplestep', {
      url: '/samplestep',
      template: '<samplestep></samplestep>'
    });
})

.component('samplestep', samplestepComponent);


export default samplestepModule;
