/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('PCAdmin.theme.components')
    .directive('pageTop', pageTop);

  function pageTopCtrl($scope) {
    $scope.logout = function () {
      window.location.href = 'auth.html';
    };
  }
  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      link: pageTopCtrl,
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();
