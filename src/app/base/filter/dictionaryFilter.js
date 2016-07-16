  (function() {
    'use strict';
    /** @ngInject */
    angular.module('PCAdmin.base').filter('dictionary', function(dictionaryData) {
      return function(input, type) {
        return input;
      };
    });

  })();
