class SamplewizardController {
  constructor(wizardService) {
    "ngInject";
    this.name = 'samplewizard';
    this.wizardService = wizardService;
    console.log('inside SampleWizard Ctrl');
    this.steps = [
      {
         name: 'Demographics',
         state: 'samplewizard.demographics',
       }, {
         name: 'Company Types',
         state: 'samplewizard.companyTypes',
       }, {
         name: 'Line of Business',
         state: 'samplewizard.lineOfBusiness'
       }
    ];
  }

  finish() {
    console.log('Finish!');
  }

  getCurrentStep() {
    return this.wizardService.getCurrentStep();
  }
}

export default SamplewizardController;
