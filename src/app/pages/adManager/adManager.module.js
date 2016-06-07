/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.adManager', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('adManager', {
        url: '/adManager',
        template: '<ui-view></ui-view>',
        abstract: true,
        title: '广告素材管理',
        sidebarMeta: {
          icon: 'ion-compose',
          order: 3,
        },
      })
      .state('adManager.adReviewStatus', {
        url: '/adReviewStatus',
        templateUrl: 'app/pages/adManager/adReviewStatus/adReviewStatus.html',
        title: '广告素材审核状态',
        controller: 'adReviewStatusCtrl',
        controllerAs: 'vm',
        sidebarMeta: {
          order: 0,
        },
      });
  }
})();
