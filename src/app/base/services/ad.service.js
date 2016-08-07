/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('adService', adService);

  /** @ngInject */
  function adService(fetchUtil, $q) {
    return {
      adOffShelf: function (params) {
        var defer = $q.defer();
        fetchUtil.jsonp('adbms/BaseAdvertInfo_applyAdOffShelf.do', params).then(function (data) {
          if (data.retState == 0) {
            defer.resolve(data.retMessage);
          } else {
            defer.reject(data.retMessage);
          }
        }, function (data) {
          defer.reject(data);
        });
        return defer.promise;
      },
      getAdList: function (params) {
        params = params || {};
        params.advertStatus = '02';
        var defer = $q.defer();
        fetchUtil.jsonp('adbms/BaseAdvertInfo_getAdvertByAdvertiser.do', params).then(function (data) {
          defer.resolve(data.resultList);
        }, function (data) {
          defer.reject(data);
        });
        return defer.promise;

      }
    };
  }
})();
