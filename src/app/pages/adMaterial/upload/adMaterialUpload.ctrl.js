(function () {
  'use strict';
  angular.module('PCAdmin.pages.adMaterial')
    .controller('adMaterialUploadCtrl', adMaterialUploadCtrl)
    .controller('uploadSelectFileCtrl', uploadSelectFileCtrl);

  /** @ngInject */
  function adMaterialUploadCtrl($scope, $uibModal, adMaterialUploadService) {
    var vm = this;
    vm.openFileSelect = function () {
      var modal = $uibModal.open({
        animation: true,
        size: 'md',
        controller: 'uploadSelectFileCtrl',
        templateUrl: 'app/pages/adMaterial/upload/uploadSelectFile.modal.html',
        resolve: {
          files: function () {
            return vm.files;
          }
        }
      });
      modal.result.then(function (data) {
        vm.files = data;
      });

    };
    vm.uploadAd = function () {
      adMaterialUploadService.upload();
    };
  }

  /** @ngInject */
  function uploadSelectFileCtrl($scope, $uibModalInstance, files) {
    $scope.files = files || [{}, {}, {}, {}, {}];
    $scope.close = function () {
      $uibModalInstance.close($scope.files);
    };
  }
})();
