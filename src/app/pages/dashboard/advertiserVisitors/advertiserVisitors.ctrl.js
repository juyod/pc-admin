/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('advertiserVisitorsCtrl', advertiserVisitorsCtrl);

  /** @ngInject */
  function advertiserVisitorsCtrl($scope, advertiserVisitorsService) {
    $scope.classList = ['primary-light', 'primary-light-second', 'primary-light-third', 'primary-light-forth'];
    $scope.vistorsList = [];
    advertiserVisitorsService.loadSceneVisit().then(function(data) {
      $scope.vistorsList = data;
    })
  }
})();
