import angular from 'angular';
import CompanyService from './company.service';

let companyModule = angular.module('company', [])

.factory('companyService', CompanyService);

export default companyModule;
