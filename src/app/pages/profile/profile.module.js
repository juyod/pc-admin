/**
 * @author  lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.profile', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        title: '会员信息',
        templateUrl: 'app/pages/profile/profile.html',
        controller: 'ProfilePageCtrl',
        sidebarMeta: {
          icon: 'fa fa-user',
          order: 2
        }
      });
  }
})();
