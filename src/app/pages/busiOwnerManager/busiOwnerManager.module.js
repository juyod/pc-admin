/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.busiOwnerManager', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('busiOwnerManager', {
        url: '/busiOwnerManager',
        title: '企业主管理',
        templateUrl: 'app/pages/busiOwnerManager/busiOwnerManager.html',
        controller: 'busiOwnerManagerCtrl',
        sidebarMeta: {
          icon: 'fa fa-cog',
          order: 2
        }
      });
  }
})();
