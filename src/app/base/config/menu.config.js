/**
 * @author: lgc
 **/
(function () {
  'use strict';
  angular.module('PCAdmin.base').config(routeConfig);
  /** @ngInject */
  function routeConfig($stateProvider, menuServiceProvider, $urlRouterProvider) {
    menuServiceProvider.$get().loadNoticeList().then(function (data) {
      debugger;
      $stateProvider
        .state('sysNotice', {
          url: '/sysNotice',
          templateUrl: 'app/pages/sysNotice/sysNotice.html',
          controller: 'sysNoticeCtrl',
          controllerAs: 'vm',
          title: '系统公告',
          sidebarMeta: {
            icon: 'fa fa-bell',
            order: 8
          }
        });

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

      $stateProvider
        .state('incomeReport', {
          url: '/incomeReport',
          templateUrl: 'app/pages/incomeReport/incomeReport.html',
          controller: 'incomeReportCtrl',
          controllerAs: 'vm',
          title: '收益报表',
          sidebarMeta: {
            icon: 'fa fa-usd',
            order: 6
          }
        });
      $stateProvider
        .state('detailReport', {
          url: '/detailReport',
          templateUrl: 'app/pages/detailReport/detailReport.html',
          controller: 'detailReportCtrl',
          controllerAs: 'vm',
          title: '明细报表',
          sidebarMeta: {
            icon: 'fa fa-newspaper-o',
            order: 5
          }
        });

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
      $stateProvider
        .state('adCalendar', {
          url: '/adCalendar',
          templateUrl: 'app/pages/adCalendar/adCalendar.html',
          title: '广告行事历',
          controller: 'adCalendarCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
            icon: 'fa fa-calendar',
            order: 4
          }
        });
      $urlRouterProvider.when('/adMaterial', '/adMaterial/auditStatus');
      $urlRouterProvider.otherwise('/dashboard');
    });
  }
})();
