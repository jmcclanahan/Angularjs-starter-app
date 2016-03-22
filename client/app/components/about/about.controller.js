class AboutController {
  constructor(companyService, tokenService) {
    "ngInject";
    this.name = 'about';
    this.companyService = companyService;
    this.companyService.getCompany();
    this.company = this.companyService.getCompany();
    console.log('companyName', this.companyName);
  }

  getCompany() {
    this.companyName = this.companyService.getCompany();
  }

}

export default AboutController;
