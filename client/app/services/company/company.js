import angular from 'angular';
import CompanyService from './company.service';

let companyModule = angular.module('companyServices', [])

.service('companyService', CompanyService);

export default companyModule;
