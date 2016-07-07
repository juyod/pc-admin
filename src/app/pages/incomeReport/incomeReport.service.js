(function () {
  'use strict';
  /** @ngInject */
  angular.module('PCAdmin.pages.incomeReport').factory('incomeReportService', function ($q, fetchUtil) {
    return {
      query: function (params) {
        params.busiOwnerId = 47;
        var defer = $q.defer();
        fetchUtil.jsonp('adbms/AdvertStatis_adBenefitReport.do', params).then(function (data) {
          defer.resolve(data.resultList);
        }, function (data) {
          defer.reject(data);
        });
        return defer.promise;
      }
    };
  });
})();
