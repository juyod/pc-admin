/**
 * @author  lgc
 */
(function() {
  'use strict';

  var SEVER_ROOT = 'http://58.23.16.163:8088/portMgt/';

  angular.module('PCAdmin.base')
    .constant('apiConfig', {
      url: SEVER_ROOT
    });
})();
