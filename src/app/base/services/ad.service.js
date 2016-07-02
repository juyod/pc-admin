/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('adService', adService);

  /** @ngInject */
  function adService(fetchUtil, $q) {
    return {
      adOffShelf: function(params) {
        var defer = $q.defer();
        fetchUtil.jsonp('backstageJson/Advert_applyAdOffShelf.do', params).then(function(data) {
          if (data.retState === 0) {
            defer.resolve();
          } else {
            defer.reject(data.retMessage);
          }
        }, function(data) {
          defer.reject(data);
        });
        return defer.promise;
      }
    };
  }
})();
