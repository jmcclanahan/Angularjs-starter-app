let <%= name %>Module = angular.module('<%= name %>', [
])

config(($stateProvider, $compileProvider) => {
  "ngInject";
  $stateProvider
    .state('<%= name %>', {
      url: '/<%= name %>',
      controllerAs: 'vm',
      controller: function($scope) {
        this.name = "<%= name %>";
      },
      templateProvider: ['$q', function($q) {
                let deferred = $q.defer();

                require.ensure(['./<%= name %>.html'], function() {
                    var template = require('./<%= name %>.html');
                    deferred.resolve(template);
                });

                return deferred.promise;
            }],

      // Lazy load this component
      resolve: {
        loadComponent: ($q, $ocLazyLoad) => {
          var deferred = $q.defer();

          require.ensure([], function(require) {

            let component = require('./<%= name %>.component');

            $ocLazyLoad.inject([
              component.name
            ])
            .then(() => $compileProvider.directive('<%= name %>', component))
            .then(deferred.resolve);
          }, '<%= name %>');

          return deferred.promise
        }
      }
    });
});


export default <%= name %>Module;
