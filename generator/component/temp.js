import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('<%= name %>', {
      url: '/<%= name %>',
      template: '<<%= name %>></<%= name %>>'
    });
})

.component('<%= name %>', <%= name %>Component);


export default <%= name %>Module;
