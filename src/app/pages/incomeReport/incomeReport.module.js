/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.incomeReport', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
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
  }
})();
