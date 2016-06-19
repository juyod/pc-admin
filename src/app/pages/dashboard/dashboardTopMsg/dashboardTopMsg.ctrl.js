/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('DashboardTopMsgCtrl', DashboardTopMsgCtrl);

  /** @ngInject */
  function DashboardTopMsgCtrl($scope, DashboardTopMsgService) {
    DashboardTopMsgService.getTotalOnline().then(function(data) {
      $scope.totalOnline = data;
    }, function() {
      $scope.totalOnline = '暂无数据';
    });
    DashboardTopMsgService.loadPeopleFlow().then(function(data) {
      $scope.peopleFlow = data;
    }, function() {
      $scope.peopleFlow = '暂无数据';
    });
    DashboardTopMsgService.loadLatestAnnouncement().then(function(data) {
      $scope.latestAnnouncement = data;
    }, function() {
      $scope.latestAnnouncement = '暂无数据';
    });
  }
})();
