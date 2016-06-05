/**
 * @author v.lugovksy
 * created on 16.12.2015
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
