/**
 * @author: lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .directive('areaSelect', areaSelect);
  /** @ngInject */
  function areaSelect(areaService) {
    return {
      link: function (scope, element) {
        areaService.loadAreaList().then(function (data) {
          angular.forEach(data, function (v) {
            element.append('<option value="' + v.SCENE_CODE + '">' + v.SCENE_NAME + '</option>');
          });
        });
      }
    };
  }
})();
