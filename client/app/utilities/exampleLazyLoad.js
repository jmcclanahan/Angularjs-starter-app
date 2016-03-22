let aboutModule = angular.module('about', [
])

.config(($stateProvider, $compileProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      controllerAs: 'vm',
      controller: function($scope) {
        this.name = "about";
      },
      templateProvider: ['$q', function($q) {
                let deferred = $q.defer();

                require.ensure(['./about.html'], function() {
                    var template = require('./about.html');
                    deferred.resolve(template);
                });

                return deferred.promise;
            }],

      // Lazy load this component
      resolve: {
        loadComponent: ($q, $ocLazyLoad) => {
          var deferred = $q.defer();

          require.ensure([], function(require) {

            let component = require('./about.component');

            $ocLazyLoad.inject([
              component.name
            ])
            .then(() => $compileProvider.directive('about', component))
            .then(deferred.resolve);
          }, 'about');

          return deferred.promise
        }
      }
    });
});

export default aboutModule;
