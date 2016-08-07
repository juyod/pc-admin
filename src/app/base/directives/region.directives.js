/**
 * @author: lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .directive('regionSelect', dictionrySelect);

  /** @ngInject */
  function dictionrySelect(dictionaryService) {
    return {
      link: function (scope, element) {

      }
    };
  }

})();
