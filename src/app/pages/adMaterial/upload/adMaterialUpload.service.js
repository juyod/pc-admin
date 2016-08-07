(function () {
  'use strict';
  angular.module('PCAdmin.pages.adMaterial').factory('adMaterialUploadService', adMaterialUploadService);

  /** @ngInject */
  function adMaterialUploadService(fetchUtil) {
    return {
      uploadAd: uploadAd
    };

    function uploadAd(params) {

    }
  }
})();
