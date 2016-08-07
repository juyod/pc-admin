/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.detailReport')
    .controller('showMoreDetailCtrl', showMoreDetailCtrl)
    .controller('detailReportCtrl', detailReportCtrl);

  /** @ngInject */
  function detailReportCtrl($scope, $filter, $uibModal, datailReportService, areaService) {
    var now = new Date();
    $scope.params = {
      startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000),
      sceneCode: '',
      putMode: ''
    };
    var vm = this;
    vm.displayed = [];
    vm.query = function () {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyyMMdd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyyMMdd');
      datailReportService.query(queryParams).then(function (data) {
        vm.detailList = data;
      });
    };
    areaService.loadAreaList().then(function (data) {
      $scope.areaList = data;
      if (data && data.length > 0) {
        $scope.params.sceneCode = data[0].SCENE_CODE || '';
      }
    }, function () {});
    $scope.$watch('params', vm.query);
    vm.showAdDetail = function (detailReport) {
      var modal = $uibModal.open({
        animation: true,
        size: 'md',
        controller: 'showMoreDetailCtrl',
        templateUrl: 'app/pages/detailReport/detailReport.modal.html',
        resolve: {
          detailReport: function () {
            return detailReport;
          }
        }
      });
      modal.result.finally(function () {});
    };
  }

  /** @ngInject */
  function showMoreDetailCtrl($scope, $uibModalInstance, datailReportService, detailReport, toastr) {
    $scope.detailReport = detailReport;
    datailReportService.queryDetail({
      advertPutRecordId: detailReport.ADVERT_PUT_RECORD_ID
    }).then(function (data) {
      $scope.moreDetailReport = data;
    }, function (data) {
      toastr.error(data);
    });
  }

})();
