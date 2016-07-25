/**
 * @author  lgc
 */
(function () {
  'use strict';

  var SEVER_ROOT = 'http://117.30.168.140:8080/portMgt/';

  angular.module('PCAdmin.base')
    .constant('apiConfig', {
      url: SEVER_ROOT
    });
})();
