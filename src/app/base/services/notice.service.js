/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('noticeService', noticeService);

  /** @ngInject */
  function noticeService(fetchUtil) {

    return {
      loadNoticeList: function() {
        return fetchUtil.jsonp('notice/getNoticeInfoList.do');
      }
    }
  }
})();
