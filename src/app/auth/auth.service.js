(function () {
  'use strict';
  angular.module('PCAuth').factory('authService', authService);
  /** @ngInject */
  function authService(fetchUtil, $q) {
    var login = function (params) {
      params.systemCode = '03';
      var defer = $q.defer();
      fetchUtil.jsonp('bguser/login.do', params).then(function (data) {
        if (data.retState !== '0') {
          defer.reject(data.retMessage);
        } else {
          if (data.userInfo.userType === '03') {
            data.userInfo.type = 'advertiserId';
          } else if (data.userInfo.userType === '04') {
            data.userInfo.type = 'busiOwnerId';
          }
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
