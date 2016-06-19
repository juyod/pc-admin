/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.base')
    .factory('areaService', areaService);

  /** @ngInject */
  function areaService(fetchUtil) {

    return {
      loadAreaList: function() {
        return fetchUtil.jsopn('pubwifi/getJoinedArea.do');
      }
    }
  }
})();
