(function () {
  'use strict';
  angular.module('PCAuth').controller('authCtrl', authCtrl);
  /** @ngInject */
  function authCtrl($scope, authService, toastr, $cookies, apiConfig) {
    $scope.params = {
      userName: '',
      password: ''
    };
    $scope.verifyImgUrl = apiConfig.url + 'vc/getVerifyCode.do?width=80&height=34';
    $scope.refreshImg = function () {
      var tempUrl = apiConfig.url + 'vc/getVerifyCode.do?width=80&height=34';
      $scope.verifyImgUrl = tempUrl + '&time=' + new Date().getTime();
    }
    $scope.enterPress = function ($event) {
      var keyCode = $event.which || $event.keyCode;
      if (keyCode === 13) {
        $scope.login();
      }
    };
    $scope.login = function () {
      authService.login($scope.params).then(function (data) {
        $cookies.put('userInfo', JSON.stringify(data));
        window.location.href = "index.html";
      }, function (data) {
        toastr.error(data);
      });
    };
  }
})();
