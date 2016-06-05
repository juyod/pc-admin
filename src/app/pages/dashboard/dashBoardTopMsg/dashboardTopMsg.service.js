/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .factory('DashboardTopMsgService', DashboardTopMsgService);

  /** @ngInject */
  function DashboardTopMsgService($http) {
    var loadCurOnline = function() {
      return $http.jsonp('', {});
    };
    var loadHistoryOnline = function() {

    };
    var loadPeopleFlow = function() {

    };
    var loadLatestAnnouncement = function() {

    };
    return {
      loadCurOnline: loadCurOnline,
      loadHistoryOnline: loadHistoryOnline,
      loadPeopleFlow: loadPeopleFlow,
      loadLatestAnnouncement: loadLatestAnnouncement
    };
  }
})();
