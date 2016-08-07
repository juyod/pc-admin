/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.adMaterial', [
      'ngFileUpload'
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('adMaterial', {
        url: '/adMaterial',
        template: '<ui-view></ui-view>',
        abstract: true,
        title: '广告素材管理',
        sidebarMeta: {
          icon: 'ion-grid',
          order: 6,
        }
      }).state('adMaterial.auditStatus', {
        url: '/auditStatus',
        templateUrl: 'app/pages/adMaterial/auditStatus/auditStatus.html',
        title: '广告素材审核状态',
        controller: 'auditStatusCtrl',
        controllerAs: 'vm',
        sidebarMeta: {
          order: 0,
        },
      }).state('adMaterial.upload', {
        url: '/adMaterialUpload',
        templateUrl: 'app/pages/adMaterial/upload/upload.html',
        title: '上传广告素材',
        controller: 'adMaterialUploadCtrl',
        controllerAs: 'vm',
        sidebarMeta: {
          order: 100,
        },
      });
    $urlRouterProvider.when('/adMaterial', '/adMaterial/auditStatus');
  }

})();
