/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages', [
      'ui.router',
      'PCAdmin.pages.dashboard',
      'PCAdmin.pages.memberInfo',
      'PCAdmin.pages.adManager',
      'PCAdmin.pages.detailReport',
      'PCAdmin.pages.adCalendar',
      'PCAdmin.pages.systemNotice',
      'PCAdmin.pages.feedback',
      'PCAdmin.pages.advertiserManager',
      'PCAdmin.pages.detailReport'
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
