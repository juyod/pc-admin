/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('fetchUtil', fetchUtil);

  /** @ngInject */
  function fetchUtil($http, apiConfig, $httpParamSerializer, $q, userService, toastr) {
    var user = userService.getUser();
    var type = user.type;
    var hasAlertUnLogin = false;
    var jsonp = function (url, params) {
      params = params || {};
      var defer = $q.defer();
      params[type] = user.userId;
      var qs = $httpParamSerializer(params);
      $http.jsonp(apiConfig.url + url + '?callback=JSON_CALLBACK&' + qs).then(function (resp) {
        if (resp.data && resp.data.retState === '-9') {
          if (!hasAlertUnLogin) {
            toastr.error('您未登录或者登录已经失效，请重新登录');
            hasAlertUnLogin = true;
          }
          setTimeout(function () {
            window.location.href = 'auth.html';
          }, 1000);
        }
        defer.resolve(resp.data);
      }, function (data) {
        defer.reject(data);
      });
      return defer.promise;
    };
    return {
      jsonp: jsonp
    };
  }
})();
