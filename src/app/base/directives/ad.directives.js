/**
 * @author: lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .directive('adSelect', adSelect);

  /** @ngInject */
  function adSelect(adService) {
    return {
      link: function (scope, element) {
        adService.getAdList().then(function (data) {
          angular.forEach(data, function (v) {
            element.append('<option value="' + v.ADVERT_CODE + '">' + v.ADVERT_NAME + '</option>');
          });
        });
      }
    };
  }

})();
