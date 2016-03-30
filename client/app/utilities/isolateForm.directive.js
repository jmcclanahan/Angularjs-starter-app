class IsolateForm {
  constructor() {
    this.restrict = 'A';
    this.require  = '?form';
  }

  link(scope, elem, attrs, ctrl) {
    if (!ctrl) {
      return;
    }

    // Make a copy of the controller
    let ctrlCopy = {};
    angular.copy(ctrl, ctrlCopy);

    // Get the parent of the form
    let parent = elem.parent().controller('form');

    // Remove parent link to the controller
    parent.$removeControl(ctrl);

    // Replace form controller with an "isolated form"
    let isolatedFormCtrl = {
      $setValidity: (validationToken, isValid, control) => {
        ctrlCopy.$setValidity(validationToken, isValid, control);
        parent.$setValidity(validationToken, true, ctrl);
      },
      $setDirty: () => {
        elem.removeClass('ng-pristine').addClass('ng-dirty');
        ctrl.$dirty = true;
        ctrl.$pristine = false;
      },
    };

    angular.extend(ctrl, isolatedFormCtrl);
  }

  static directiveFactory(){
    IsolateForm.instance = new IsolateForm();
    return IsolateForm.instance;
  }
}

export default IsolateForm;
