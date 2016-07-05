/**
 * @author  lgc
 */
(function () {
  'use strict';

  var SEVER_ROOT = 'http://117.30.43.225:8088/portMgt/';

  angular.module('PCAdmin.base')
    .constant('apiConfig', {
      url: SEVER_ROOT
    });
})();
