(function () {
  'use strict';
  angular.module('PCAdmin.pages.adMaterial').controller('auditStatusCtrl', auditStatusCtrl);

  /** @ngInject */
  function auditStatusCtrl($scope, $filter, auditStatusService, toastr) {
    var vm = this;
    vm.displayed = [], vm.detailList = [];
    $scope.params = {};
    vm.query = function () {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyyMMdd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyyMMdd');
      auditStatusService.query(queryParams).then(function (data) {
        vm.detailList = data;
      }, function (data) {
        toastr.error(data);
      });
    }
  }
})();
