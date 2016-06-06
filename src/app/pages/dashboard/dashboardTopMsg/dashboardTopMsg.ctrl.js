/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('DashboardTopMsgCtrl', DashboardTopMsgCtrl);

  /** @ngInject */
  function DashboardTopMsgCtrl($scope, DashboardTopMsgService) {
    DashboardTopMsgService.loadCurOnline().then(function(data) {
      $scope.curOnline = data;
    }, function() {
      $scope.curOnline = '暂无数据';
    });
    DashboardTopMsgService.loadHistoryOnline().then(function() {}, function() {});
    DashboardTopMsgService.loadPeopleFlow().then(function() {}, function() {});
    DashboardTopMsgService.loadLatestAnnouncement().then(function() {}, function() {});
  }
})();
