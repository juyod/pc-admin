(function() {
  'use strict';
  /** @ngInject */
  angular.module('PCAdmin.pages.adCalendar').factory('adCalendarService', function($q, fetchUtil) {
    var getAdvertCalendar = function(params) {
      var defer = $q.defer();
      fetchUtil.jsonp('AdvertStatis_getAdvertCalendar.do', params).then(function(data) {
        defer.resolve(data.resultList)
      }, function() {
        defer.reject();
      });
      return defer.promise;
    };
    return {
      getAdvertCalendar: getAdvertCalendar
    };
  });
})();
