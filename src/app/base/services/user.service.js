/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('userService', userService);

  /** @ngInject */
  function userService() {
    var userInfo = {
      id: '6',
      name: 'Johon Smisth',
      email: 'js@gmail.com',
      photo: 'assets/img/app/profile/Nasta.png',
      type: 'joinUserId' //busiOwnerId   advertiserId
    }
    return {
      loadUser: function() {

      },
      getUser: function() {
        return userInfo;
      },
      setUser: function(user) {
        userInfo = angular.merge(userInfo, user);
      }
    }
  }
})();
