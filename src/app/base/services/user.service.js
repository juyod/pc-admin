/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('userService', userService);

  /** @ngInject */
  function userService($cookies, $q) {
    var userTemp = JSON.parse($cookies.get('userInfo') || '{}');
    var userInfo = angular.copy(userTemp);
    return {
      getUser: function () {
        return userInfo;
      },
      setUser: function (user) {
        userInfo = angular.merge(userInfo, user);
      },
      getbusiOwnerList: function () {

      }

    };
  }
})();
