/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function() {
  'use strict';

  var SEVER_ROOT = 'http://58.23.16.163:8088/portMgt/';

  angular.module('PCAdmin.base')
    .constant('apiConfig', {
      url: SEVER_ROOT
    });
})();
