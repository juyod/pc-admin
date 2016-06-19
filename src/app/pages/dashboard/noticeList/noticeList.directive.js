/**
 * @author guocailee
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .directive('noticeList', noticeList);

  /** @ngInject */
  function noticeList() {
    return {
      restrict: 'E',
      controller: 'noticeListCtrl',
      templateUrl: 'app/pages/dashboard/noticeList/noticeList.html'
    };
  }
})();
