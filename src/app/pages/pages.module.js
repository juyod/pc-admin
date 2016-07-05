/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages', [
      'ui.router',
      'PCAdmin.pages.dashboard',
      'PCAdmin.pages.detailReport',
      'PCAdmin.pages.adCalendar',
      'PCAdmin.pages.detailReport',
      'PCAdmin.pages.incomeReport'
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
