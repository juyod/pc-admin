/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('everyDayVisitorCtrl', everyDayVisitorCtrl);

  /** @ngInject */
  function everyDayVisitorCtrl($scope, everyDayVisitorSevice) {
    var query = function(params) {
      everyDayVisitorSevice.loadAdVisitCntGrowthRate().then(function(data) {

      });
    };

  }
})();
