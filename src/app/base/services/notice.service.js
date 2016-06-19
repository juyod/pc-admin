/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('noticeService', noticeService);

  /** @ngInject */
  function noticeService(fetchUtil, $q) {

    return {
      loadNoticeList: function() {
        var defer = $q.defer();
        fetchUtil.jsonp('notice/getNoticeInfoList.do', {}).then(function(data) {
          defer.resolve(data);
        }, function(data) {
          defer.reject(data);
        });
        return defer.promise;
      }
    }
  }
})();
