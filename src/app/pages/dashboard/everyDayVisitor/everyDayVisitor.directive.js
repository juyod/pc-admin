/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .directive('everyDayVisitor', everyDayVisitor);

  /** @ngInject */
  function everyDayVisitor() {
    return {
      restrict: 'E',
      controller: 'everyDayVisitorCtrl',
      templateUrl: 'app/pages/dashboard/everyDayVisitor/everyDayVisitor.html'
    };
  }
})();
