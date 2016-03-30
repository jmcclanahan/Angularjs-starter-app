import angular from 'angular';
import AuthServices from './auth/auth';
import CompanyServices from './company/company';
import WizardServices from './wizard/wizard';

let serviceModule = angular.module('app.services', [
  AuthServices.name,
  CompanyServices.name,
  WizardServices.name
]);

export default serviceModule;
