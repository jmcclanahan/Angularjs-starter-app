import template from './wizard.html';
import controller from './wizard.controller';
import './wizard.styl';
import './wizard.css';

let wizardComponent = {
  transclude: true,
  restrict: 'E',
  bindings: {
    title: '@',
    steps: '<',
    finish: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default wizardComponent;
