/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.sysNotice')
    .controller('sysNoticeCtrl', sysNoticeCtrl)
    .controller('sysNoticeDetailCtrl', sysNoticeDetailCtrl);

  /** @ngInject */
  function sysNoticeCtrl($scope, $filter, $uibModal, noticeService) {
    var vm = this;
    noticeService.loadNoticeList().then(function (data) {
      vm.noticeList = data.resultList;
    });
    $scope.showNoticeDetail = function (notice) {
      var modal = $uibModal.open({
        animation: true,
        size: 'lg',
        controller: 'sysNoticeDetailCtrl',
        templateUrl: 'app/pages/dashboard/noticeList/notice.modal.html',
        resolve: {
          notice: function () {
            return notice;
          }
        }
      });
      modal.result.finally(function () {
        noticeService.viewNotice(notice).then(function () {
          notice.IS_VISIT = '01';
        });
      });
    };
  }

  function sysNoticeDetailCtrl($scope, notice, $uibModalInstance) {
    $scope.ok = function () {
      $uibModalInstance.close();
    };
    $scope.notice = notice;
  }
})();
