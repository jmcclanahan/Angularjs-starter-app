import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';

let navbarComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'vm'
};

export default navbarComponent;
