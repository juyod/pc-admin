/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('fetchUtil', fetchUtil);

  /** @ngInject */
  function fetchUtil($http, apiConfig, $httpParamSerializer, $q, userService) {
    var user = userService.getUser();
    var type = user.type;
    var jsonp = function(url, params) {
      params = params || {};
      var defer = $q.defer();
      params[type] = user.id;
      var qs = $httpParamSerializer(params);
      $http.jsonp(apiConfig.url + url + '?callback=JSON_CALLBACK&' + qs).then(function(resp) {
        defer.resolve(resp.data);
      }, function(data) {
        defer.reject(data);
      });
      return defer.promise;
    };
    return {
      jsonp: jsonp
    };
  }
})();
