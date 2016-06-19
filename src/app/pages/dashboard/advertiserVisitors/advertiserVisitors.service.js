/**
 * @author guocailee
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .factory('advertiserVisitorsService', advertiserVisitorsService);

  /** @ngInject */
  function advertiserVisitorsService(fetchUtil, $q) {
    var loadSceneVisit = function() {
      var defer = $q.defer();
      fetchUtil.jsonp('adbms/AdvertStatis_getSceneVisitCntByAdvertiser.do').then(function(data) {
        defer.resolve(data.resultList);
      });
      return defer.promise;
    };
    return {
      loadSceneVisit: loadSceneVisit
    };
  }
})();
