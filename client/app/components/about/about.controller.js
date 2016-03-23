class AboutController {
  constructor(companyService, tokenService) {
    "ngInject";
    this.name = 'about';
    companyService.getCompany();
    this.company = companyService.getCompany();
  }

  getCompany() {
    this.companyName = this.companyService.getCompany();
  }

}

export default AboutController;
