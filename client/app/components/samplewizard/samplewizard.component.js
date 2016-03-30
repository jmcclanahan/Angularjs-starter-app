import template from './samplewizard.html';
import controller from './samplewizard.controller';
import './samplewizard.styl';

let samplewizardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default samplewizardComponent;
