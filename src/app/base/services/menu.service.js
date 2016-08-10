/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('menuService', menuService);

  /** @ngInject */
  function menuService(fetchUtil, $q, userService) {
    var changeRespToRuter = function (data) {
      var resultList = [];
      for (var i = 0; i < data.length; i++) {
        var temp = {
          url: '/busiOwnerManager',
          title: '企业主管理',
          templateUrl: 'app/pages/busiOwnerManager/busiOwnerManager.html',
          controller: 'busiOwnerManagerCtrl',
          sidebarMeta: {
            icon: 'fa fa-cog',
            order: 2
          }
        };
        resultList.push(temp);
      }
      return resultList;
    };
    var loadNoticeList = function () {
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
