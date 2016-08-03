/**
 * @author lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('dictionaryService', dictionaryService);

  /** @ngInject */
  function dictionaryService(fetchUtil, userService, $q) {
    var dictionaryList = {

    };
    return {
      loadDictionaryListByKey: function (key) {
        var defer = $q.defer();
        if (!dictionaryList[key]) {
          fetchUtil.jsonp('sysparam/getCodeNote.do', {
            codeGroupKey: key
          }).then(function (data) {
            dictionaryList[key] = data.resultList;
            defer.resolve(dictionaryList[key]);
          }, function () {
            defer.reject();
          });
        } else {
          defer.resolve(dictionaryList[key]);
        }
        return defer.promise;
      },
      getAllDictionary: function () {
        return dictionaryList;
      }
    };
  }
})();
