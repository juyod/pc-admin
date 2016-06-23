/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.adCalendar', ['smart-table'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('adCalendar', {
        url: '/adCalendar',
        templateUrl: 'app/pages/adCalendar/adCalendar.html',
        title: '广告行事历',
        sidebarMeta: {
          icon: 'fa fa-calendar',
          order: 4
        }
      });
  }
})();
