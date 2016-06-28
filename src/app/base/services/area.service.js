/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('areaService', areaService);

  /** @ngInject */
  function areaService(fetchUtil, $q) {
    var areaList = null;
    return {
      loadAreaList: function() {
        var defer = $q.defer();
        if (!areaList) {
          fetchUtil.jsonp('adbms/BaseAdvertInfo_getSceneByAdvertiser.do', {}).then(function(data) {
            areaList = data.resultList;
            defer.resolve(data.resultList);
          }, function() {
            defer.reject();
          });
        } else {
          defer.resolve(areaList);
        }
        return defer.promise;
      }
    };
  }
})();
