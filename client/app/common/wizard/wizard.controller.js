class WizardController {
  constructor(wizardService) {
    "ngInject";
    this.name = 'wizard';
    this.wizardService = wizardService;
    this.wizardService.setSteps(this.steps);
    this.wizardService.setCurrentStep(0);
  }

  isFormValid() {
    return this.wizardService.isFormValid();
  }

  isFirstStep() {
    return this.wizardService.isFirstStep();
  }

  isLastStep() {
    return this.wizardService.isLastStep();
  }

  isCurrentStep(step) {
    return this.wizardService.isCurrentStep(step);
  }

  setCurrentStep(step) {
    return this.wizardService.setCurrentStep(step);
  }

  getCurrentStep() {
    return this.wizardService.getCurrentStep();
  }

  getCurrentStepIndex() {
    return this.wizardService.getCurrentStepIndex();
  }

  setSteps(steps) {
    return this.wizardService.setSteps(steps);
  }

  getSteps() {
    return this.wizardService.getSteps();
  }

  handlePrevious() {
    this.wizardService.handlePrevious();
  }

  handleNext() {
    this.wizardService.handleNext();
  }

}

export default WizardController;
