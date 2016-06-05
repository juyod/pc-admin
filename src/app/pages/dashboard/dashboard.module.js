/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/pages/dashboard/dashboard.html',
        title: '首页',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 0,
        },
      });
  }
})();
