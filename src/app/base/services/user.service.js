/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('userService', userService);

  /** @ngInject */
  function userService($cookies, $rootScope) {
    var userTemp = $cookies.get('userInfo') || '{}';
    var userInfo = JSON.parse(userTemp);
    userInfo.id = 8;
    userInfo.type = 'advertiserId';
    $rootScope.userInfo = userInfo;

    return {
      loadUser: function () {

      },
      getUser: function () {
        return userInfo;
      },
      setUser: function (user) {
        userInfo = angular.merge(userInfo, user);
      }
    };
  }
})();
