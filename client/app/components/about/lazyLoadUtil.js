export default ($q, $ocLazyLoad, $compileProvider, componentPath = '', componentName = '') => {
          var deferred = $q.defer();

          // Webpack will define a code-split point for all requires in this callback
          // This will effectively bundle this entire module into a single file
          // that only gets downloaded when this state is transitioned to
          require.ensure([], function(require) {

            // Require our modules
            // This replaces the `import` statements from above
            //let controller = require('./about.controller');
            // .. any other dependencies
            let component = require(componentPath);

            // Inject all dependencies into our module
            // This replaces adding them to the original angular.module dependency array
            $ocLazyLoad.inject([
              //controller.name,
              component.name
            // .. any other dependencies
            ])

            // Register the component so the template recognizes it
            .then(() => $compileProvider.directive(componentName, component))

            // Continue the state transition
            .then(deferred.resolve);

          }, 'about'); // Name our bundle so it shows up pretty in the network tab

          return deferred.promise
        };
