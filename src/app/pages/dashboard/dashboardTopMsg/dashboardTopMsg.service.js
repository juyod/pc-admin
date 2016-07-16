/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .factory('DashboardTopMsgService', DashboardTopMsgService);

  /** @ngInject */
  function DashboardTopMsgService(fetchUtil, $q, noticeService, userService) {
    var getTotalOnline = function () {
      var defer = $q.defer();
      fetchUtil.jsonp('pubwifi/getTotalOnline.do', {}).then(function (data) {
        if (data.resultList && data.resultList.length > 0) {
          defer.resolve(data.resultList[0].CNT_ONLINE);
        }
      }, function () {
        defer.reject();
      });
      return defer.promise;
    };

    var loadPeopleFlow = function () {
      var defer = $q.defer();
      fetchUtil.jsonp('pubwifi/getPassengerFlow.do', {}).then(function (data) {
        defer.resolve(data.PASSENGER_FLOW);
      }, function () {
        defer.reject();
      });
      return defer.promise;
    };
    var loadLatestAnnouncement = function () {
      var defer = $q.defer();
      noticeService.loadNoticeList({
        joinUserId: userService.getUser().userId
      }).then(function (data) {
        if (data.resultList && data.resultList.length > 0) {
          defer.resolve(data.resultList[0].UN_VISIT_CNT);
        } else {
          defer.resolve(0);
        }
      }, function (data) {
        defer.reject(data);
      })
      return defer.promise;
    };
    return {
      getTotalOnline: getTotalOnline,
      loadPeopleFlow: loadPeopleFlow,
      loadLatestAnnouncement: loadLatestAnnouncement
    };
  }
})();
