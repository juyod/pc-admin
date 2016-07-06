(function () {
  'use strict';
  angular.module('PCAuth').controller('authCtrl', authCtrl);
  /** @ngInject */
  function authCtrl($scope, authService, toastr, $cookies) {
    $scope.params = {
      userName: '',
      password: ''
    };
    $scope.login = function () {
      authService.login($scope.params).then(function (data) {
        $cookies.put('userInfo', JSON.stringify(data));
        debugger;
      }, function (data) {
        toastr.error(data);
      });
    };
  }
})();
