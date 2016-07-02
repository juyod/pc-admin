/**
 * @author  lgc
 */
(function() {
  'use strict';

  var SEVER_ROOT = 'http://120.41.175.127:8088/portMgt/';

  angular.module('PCAdmin.base')
    .constant('apiConfig', {
      url: SEVER_ROOT
    });
})();
