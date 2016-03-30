import angular from 'angular';
import WizardService from './wizard.service';

let wizardModule = angular.module('wizardServices', [])

.service('wizardService', WizardService);

export default wizardModule;
