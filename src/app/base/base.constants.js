/**
 * @author  lgc
 */
(function () {
  'use strict';

  var SEVER_ROOT = 'http://27.152.134.157:8088/portMgt/';

  angular.module('PCAdmin.base')
    .constant('apiConfig', {
      url: SEVER_ROOT
    });
})();
