(function () {
  'use strict';
  angular.module('PCAuth').factory('authService', authService);
  /** @ngInject */
  function authService(fetchUtil, $q) {
    var login = function (params) {
      var defer = $q.defer();
      fetchUtil.jsonp('bguser/login.do', params).then(function (data) {
        if (data.retState !== '0') {
          defer.reject(data.retMessage);
        } else {
          defer.resolve(data.userInfo);
        }
      }, function (data) {
        defer.reject(data);
      });
      return defer.promise;
    };
    return {
      login: login
    };

  }
})();
