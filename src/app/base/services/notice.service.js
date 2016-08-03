/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('noticeService', noticeService);

  /** @ngInject */
  function noticeService(fetchUtil, $q, userService) {
    var viewNotice = function (notice) {
      var params = {
        joinUserId: userService.getUser().userId,
        noticeId: notice.NOTICE_ID
      };
      return fetchUtil.jsonp('notice/addNoticeVisit.do', params);
    };
    var loadNoticeList = function (params) {
      params = params || {};
      params.joinUserId = userService.getUser().userId;
      var defer = $q.defer();
      fetchUtil.jsonp('notice/getNoticeInfoList.do', params).then(function (data) {
        defer.resolve(data);
      }, function (data) {
        defer.reject(data);
      });
      return defer.promise;
    };
    return {
      viewNotice: viewNotice,
      loadNoticeList: loadNoticeList
    };
  }
})();
