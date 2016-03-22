let CompanyService = function(Restangular) {
  "ngInject";

  let getCompany = () => {
    return Restangular.one('solar-api/api/secured/company/companyName').get().then(function(resp) {
      console.log('resp', resp);
      return resp;
    }, function(err) {
      console.log('err', err);
      return err;
    });
  };

  return { getCompany };
};

export default CompanyService;
