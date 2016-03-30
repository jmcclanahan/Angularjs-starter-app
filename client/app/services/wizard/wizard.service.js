class WizardService {
  constructor($state) {
    "ngInject";
    this.$state = $state;
    this.steps = {};
    this.step = {};
  }

  isFormValid() {
    // $scope.$broadcast('show-errors-check-validity');
    // form = $scope.$eval(parent.formName);
    // form.$submitted = form.$invalid;
    // return !form.$submitted;
    return true;
  }

  isFirstStep() {
    return this.step === 0;
  }

  isLastStep() {
    return this.step === (this.steps.length - 1);
  }

  isCurrentStep(step) {
    return this.step === step;
  }

  setCurrentStep(step) {
    this.step = step;
    this.$state.transitionTo(this.getCurrentStep().state);
  }

  getCurrentStep() {
    return this.steps[this.step];
  }

  getCurrentStepIndex() {
    return this.step;
  }

  setSteps(steps) {
    this.steps = steps;
  }

  getSteps() {
    return this.steps;
  }

  handlePrevious() {
    //check form validity
    if (!this.isFormValid()) { return; };
    if (!this.isFirstStep()) {
      this.setCurrentStep(this.step - 1);
    }
  }

  handleNext() {
    //check form validity
    if (!this.isFormValid()) { return; };
    if (!this.isLastStep()) {
      this.setCurrentStep(this.step + 1);
    }
  }

};

export default WizardService;
