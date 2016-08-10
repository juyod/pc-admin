/**
 * @author  lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .directive('advertiserVisitors', advertiserVisitors);

  /** @ngInject */
  function advertiserVisitors() {
    return {
      restrict: 'E',
      controller: 'advertiserVisitorsCtrl',
      templateUrl: 'app/pages/dashboard/advertiserVisitors/advertiserVisitors.html'
    };
  }
})();
