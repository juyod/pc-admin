/**
 * @author: lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .directive('busiOwnerSelect', busiOwnerSelect);

  /** @ngInject */
  function busiOwnerSelect(busiOwnerService) {
    return {
      link: function (scope, element) {
        busiOwnerService.loadBusiOwnerList().then(function (data) {
          angular.forEach(data, function (v) {
            element.append('<option value="' + v.CODE_VALUE + '">' + v.CODE_NOTE + '</option>');
          });
        });
      }
    };
  }

})();
