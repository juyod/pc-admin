/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .factory('DashboardTopMsgService', DashboardTopMsgService);

  /** @ngInject */
  function DashboardTopMsgService($http, $q) {
    var loadCurOnline = function() {
      var defer = $q.defer();
      $http.jsonp('', {});
      return defer.promise;
    };
    var loadHistoryOnline = function() {
      var defer = $q.defer();
      $http.jsonp('', {});
      return defer.promise;
    };
    var loadPeopleFlow = function() {
      var defer = $q.defer();
      $http.jsonp('', {});
      return defer.promise;
    };
    var loadLatestAnnouncement = function() {
      var defer = $q.defer();
      $http.jsonp('', {});
      return defer.promise;
    };
    return {
      loadCurOnline: loadCurOnline,
      loadHistoryOnline: loadHistoryOnline,
      loadPeopleFlow: loadPeopleFlow,
      loadLatestAnnouncement: loadLatestAnnouncement
    };
  }
})();