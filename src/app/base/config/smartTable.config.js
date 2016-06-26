/**
 * @author  lgc
 */
(function() {
  'use strict';

  var SEVER_ROOT = 'http://58.23.16.163:8088/portMgt/';

  /** @ngInject */
  angular.module('PCAdmin.base')
    .config(stConfig);
  /** @ngInject */
  function stConfig(stConfig) {
    stConfig.pagination.itemsByPage = 20;
  }

})();
