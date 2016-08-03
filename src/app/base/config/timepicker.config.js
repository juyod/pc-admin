/**
 * @author  lgc
 */
(function () {
  'use strict';

  angular.module('PCAdmin.base')
    .config(timepickerConfig);
  /** @ngInject */
  function timepickerConfig(uibDatepickerPopupConfig) {
    uibDatepickerPopupConfig.currentText = '今天';
    uibDatepickerPopupConfig.clearText = '清空';
    uibDatepickerPopupConfig.closeText = '完成';
  }

})();
