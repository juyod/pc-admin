/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('noticeService', noticeService);

  /** @ngInject */
  function noticeService(fetchUtil, $q) {
    var viewNotice = function () {}
    var loadNoticeList = function (params) {
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
