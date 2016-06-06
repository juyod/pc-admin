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
    DashboardTopMsgService.loadHistoryOnline().then(function(data) {
      $scope.historyOnline = data;
    }, function() {
      $scope.historyOnline = '暂无数据';
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
