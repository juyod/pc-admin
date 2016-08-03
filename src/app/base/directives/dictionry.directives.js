/**
 * @author: lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .directive('dictionrySelect', dictionrySelect);

  /** @ngInject */
  function dictionrySelect(dictionaryService) {
    return {
      link: function (scope, element) {
        var key = element.attr('dictionry-select');
        dictionaryService.loadDictionaryListByKey(key).then(function (data) {
          angular.forEach(data, function (v) {
            element.append('<option value="' + v.CODE_VALUE + '">' + v.CODE_NOTE + '</option>');
          });
        });
      }
    };
  }

})();
