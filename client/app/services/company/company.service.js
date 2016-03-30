class CompanyService {
  constructor(Restangular) {
    "ngInject";
    this.Restangular = Restangular;
  }

  getCompany() {
    return this.Restangular.one('solar-api/api/secured/company/companyName').get().then(function(resp) {
      console.log('resp', resp);
      return resp;
    }, function(err) {
      console.log('err', err);
      return err;
    });
  };
};

export default CompanyService;
