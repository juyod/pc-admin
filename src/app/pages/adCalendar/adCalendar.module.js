/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.adCalendar', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('adCalendar', {
        url: '/adCalendar',
        templateUrl: 'app/pages/adCalendar/adCalendar.html',
        controller: 'adCalendarCtrl',
        title: '广告行事历',
        sidebarMeta: {
          icon: 'fa fa-user',
          order: 3
        }
      });
  }
})();
