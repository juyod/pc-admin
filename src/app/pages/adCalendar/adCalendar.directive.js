/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.adCalendar')
    .directive('adCalendar', adCalendar);

  /** @ngInject */
  function adCalendar() {
    return {
      restrict: 'E',
      controller: 'adCalendarCtrl',
      templateUrl: 'app/pages/adCalendar/adCalendar.directive.html'
    };
  }
})();
