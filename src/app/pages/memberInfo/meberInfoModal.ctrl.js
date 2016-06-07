/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.memberInfo')
    .controller('memberInfoModalCtrl', ProfileModalCtrl);

  /** @ngInject */
  function ProfileModalCtrl($scope, $uibModalInstance) {
    $scope.link = '';
    $scope.ok = function() {
      $uibModalInstance.close($scope.link);
    };
  }

})();
