/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('adService', adService);

  /** @ngInject */
  function adService(fetchUtil, $q) {
    var areaList = null;
    return {
      adOffShelf: function(params) {
        var defer = $q.defer();
        fetchUtil.jsonp('backstageJson/Advert_applyAdOffShelf.do').then(function(data) {
          areaList = data.resultList;
          defer.resolve();
        }, function() {
          defer.reject();
        });
        return defer.promise;
      }
    };
  }
})();
