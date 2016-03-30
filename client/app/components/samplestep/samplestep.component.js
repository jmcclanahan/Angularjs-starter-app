import template from './samplestep.html';
import controller from './samplestep.controller';
import './samplestep.styl';

let samplestepComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default samplestepComponent;
