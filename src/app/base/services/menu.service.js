/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('menuService', menuService);

  /** @ngInject */
  function menuService(fetchUtil, $q, userService) {

    var loadMenus = function () {
      var params = {};
      params.systemCode = '03';
      params.userId = userService.getUser().userId;
      var defer = $q.defer();
      fetchUtil.jsonp('bguser/getUserRightMenu.do', params).then(function (data) {
        defer.resolve(data.resultList);
      }, function (data) {
        defer.reject(data);
      });
      return defer.promise;
    };
    return {
      loadNoticeList: loadNoticeList
    };
  }
})();
