/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('noticeListCtrl', noticeListCtrl)
    .controller('noticeDetailCtrl', noticeDetailCtrl);

  /** @ngInject */
  function noticeListCtrl($scope, noticeService, userService, $uibModal) {
    $scope.noticeList = [];
    noticeService.loadNoticeList({
      joinUserId: userService.getUser().userId
    }).then(function (data) {
      $scope.noticeList = data.resultList;
    });

    $scope.showNoticeDetail = function (notice) {
      var modal = $uibModal.open({
        animation: true,
        size: 'lg',
        controller: 'noticeDetailCtrl',
        templateUrl: 'app/pages/dashboard/noticeList/notice.modal.html',
        resolve: {
          notice: function () {
            return notice;
          }
        }
      });
      modal.result.finally(function () {
        noticeService.viewNotice(notice);
      });
    };
  }

  /** @ngInject */
  function noticeDetailCtrl($scope, notice, $uibModalInstance) {
    $scope.ok = function () {
      $uibModalInstance.close();
    };
    $scope.notice = notice;
  }
})();
