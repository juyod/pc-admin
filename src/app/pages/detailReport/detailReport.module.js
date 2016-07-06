/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.detailReport', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
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
  }
})();
