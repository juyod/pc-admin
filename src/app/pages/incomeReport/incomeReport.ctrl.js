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
    $scope.params = {
      startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000)
    };
    var vm = this;
    vm.displayed = [];
    vm.query = function () {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyyMMdd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyyMMdd');
      incomeReportService.query(queryParams).then(function (data) {
        vm.incomeList = data;
      });
    };
    $scope.$watch('params', vm.query);
  }

})();
