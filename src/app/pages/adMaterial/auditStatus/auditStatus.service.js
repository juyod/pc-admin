(function () {
  'use strict';
  angular.module('PCAdmin.pages.adMaterial').factory('auditStatusService', auditStatusService);

  /** @ngInject */
  function auditStatusService(fetchUtil, $q) {
    return {
      query: query
    };

    function query(params) {
      var defer = $q.defer();
      fetchUtil.jsonp('adbms/BaseAdvertInfo_queryAdvertAuditList.do', params).then(function (data) {
        defer.resolve(data.resultList);
      }, function (data) {
        defer.reject(data);
      });
      return defer.promise;
    }
  }
})();
