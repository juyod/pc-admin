(function () {
  'use strict';
  /** @ngInject */
  angular.module('PCAdmin.pages.detailReport').factory('datailReportService', function ($q, fetchUtil) {
    var query = function (params) {
      var defer = $q.defer();
      fetchUtil.jsonp('adbms/AdvertStatis_queryAdPutState.do', params).then(function (data) {
        defer.resolve(data.resultList)
      }, function (data) {
        defer.reject(data);
      })

      return defer.promise;
    }
    return {
      query: query
    };
    // body...
  });
})();
