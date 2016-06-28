/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.theme.components')
    .directive('noData', noData);

  /** @ngInject */
  function noData() {
    return {
      restrict: 'E',
      template: function(el, attrs) {
        var res = '<div class="no-data">暂无数据</div>';
        return res;
      }
    };
  }

})();
