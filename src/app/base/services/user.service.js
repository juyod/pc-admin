/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('userService', userService);

  /** @ngInject */
  function userService($cookies) {
    var userTemp = $cookies.get('userInfo')
    var userInfo = {
      id: '8',
      name: 'Johon Smisth',
      email: 'js@gmail.com',
      photo: 'assets/img/app/profile/Nasta.png',
      type: 'advertiserId' //busiOwnerId   advertiserId
    }
    return {
      loadUser: function () {

      },
      getUser: function () {
        return userInfo;
      },
      setUser: function (user) {
        userInfo = angular.merge(userInfo, user);
      }
    }
  }
})();
