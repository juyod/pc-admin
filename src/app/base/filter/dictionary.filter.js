  (function () {
    'use strict';
    /** @ngInject */
    angular.module('PCAdmin.base').value('dictionary', {

    }).filter('dictionaryFilter', function (dictionaryService, dictionary) {
      var serviceInvoked = false;

      function realFilter(value, type) { // REAL FILTER LOGIC
        var result = '-';
        angular.forEach(dictionary[type], function (v) {
          if (v.CODE_VALUE === value) {
            result = v.CODE_NOTE;
          }
        });
        return result;
      }
      filterStub.$stateful = true;

      function filterStub(value, type) {
        if (!dictionary[type]) {
          if (!serviceInvoked) {
            serviceInvoked = true;
            dictionaryService.loadDictionaryListByKey(type).then(function (result) {
              dictionary[type] = result;
            });
          }
          return "-";
        } else {
          return realFilter(value, type);
        }
      }
      return filterStub;
    });

  })();
