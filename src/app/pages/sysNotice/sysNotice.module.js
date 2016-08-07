/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.sysNotice', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
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
  }
})();
