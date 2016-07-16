/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .factory('everyDayVisitorSevice', everyDayVisitorSevice);

  /** @ngInject */
  function everyDayVisitorSevice(fetchUtil, $q) {
    // adbms/AdvertStatis_adVisitCntGrowthRate.do?queryDate=20160602&advertCode=20160414005
    var loadAdVisitCntGrowthRate = function (params) {
      var defer = $q.defer();
      fetchUtil.jsonp('adbms/AdvertStatis_adVisitCntGrowthRate.do', params).then(function (data) {
        var results = [];
        angular.forEach(data.resultList, function (v) {
          results.push([
            new Date(v.STATIS_TIME),
            v.CONN_SUB_CNT
          ]);
        });
        defer.resolve(results);
      }, function () {
        defer.reject();
      });
      return defer.promise;
    };



    return {
      loadAdVisitCntGrowthRate: loadAdVisitCntGrowthRate
    };
  }
})();
