/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('noticeListCtrl', noticeListCtrl);

  /** @ngInject */
  function noticeListCtrl($scope, noticeService) {
    $scope.noticeList = [];
    noticeService.loadNoticeList().then(function(data) {
      $scope.noticeList = data.resultList;
    })
  }
})();
