/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function() {
  'use strict';

  var SEVER_ROOT = 'http://192.168.0.200:8080/portMgt/';

  angular.module('PCAdmin.base')
    .constant('apiConfig', {
      url: SEVER_ROOT
    });
})();
