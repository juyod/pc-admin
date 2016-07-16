/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('busiOwnerService', busiOwnerService);

  /** @ngInject */
  function busiOwnerService(fetchUtil, userService, $q) {
    var busiOwnerList = null;
    return {
      loadBusiOwnerList: function () {
        var defer = $q.defer();
        if (!busiOwnerList) {
          fetchUtil.jsonp('adbms/BaseAdvertInfo_getBusiOwnerByAdvertiser.do', {
            advertiserId: userService.getUser().userId
          }).then(function (data) {
            busiOwnerList = data.resultList;
            defer.resolve(busiOwnerList);
          }, function () {
            defer.reject();
          });
        } else {
          defer.resolve(busiOwnerList);
        }
        return defer.promise;
      }
    };
  }
})();
