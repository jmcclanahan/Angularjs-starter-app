import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import SampleWizard from './samplewizard/samplewizard';
import SampleStep from './samplestep/samplestep';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Login.name,
  SampleWizard.name,
  SampleStep.name
]);

export default componentModule;
