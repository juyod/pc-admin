/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.incomeReport')
    .controller('incomeReportCtrl', incomeReportCtrl);

  /** @ngInject */
  function incomeReportCtrl($scope, $filter, $uibModal, incomeReportService) {
    var now = new Date();
    var vm = this;
    vm.displayed = [];
    $scope.params = {
      startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000)
    };

    vm.query = function () {
      console.log($scope.params);
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyyMMdd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyyMMdd');
      incomeReportService.query(queryParams).then(function (data) {
        vm.incomeList = data;
      });
    };
    $scope.$watch(vm.params, vm.query);
  }

})();
