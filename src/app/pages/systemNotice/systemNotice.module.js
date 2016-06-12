/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.systemNotice', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('systemNotice', {
        url: '/systemNotice',
        templateUrl: 'app/pages/systemNotice/systemNotice.html',
        controller: 'systemNoticeCtrl',
        title: '系统公告',
        sidebarMeta: {
          icon: 'fa fa-bell',
          order: 7
        }
      });
  }
})();
