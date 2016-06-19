/**
 * @author lgc 
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .directive('dashboardTopMsg', dashboardTopMsg);

  /** @ngInject */
  function dashboardTopMsg() {
    return {
      restrict: 'E',
      controller: 'DashboardTopMsgCtrl',
      templateUrl: 'app/pages/dashboard/dashboardTopMsg/dashboardTopMsg.html'
    };
  }
})();
