/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.advertiserManager', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('advertiserManager', {
        url: '/advertiserManager',
        templateUrl: 'app/pages/advertiserManager/advertiserManager.html',
        controller: 'advertiserManagerCtrl',
        title: '广告主管理',
        sidebarMeta: {
          icon: 'fa fa-microphone',
          order: 2
        }
      });
  }
})();
