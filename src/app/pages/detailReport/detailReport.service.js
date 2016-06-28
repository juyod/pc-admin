(function() {
  'use strict';
  /** @ngInject */
  angular.module('PCAdmin.pages.detailReport').factory('datailReportService', function($q, fetchUtil) {
    var query = function(params) {
      var defer = $q.defer();
      fetchUtil.jsonp('')

      return defer.promise;
    }
    return {

    };
    // body...
  });
})();
