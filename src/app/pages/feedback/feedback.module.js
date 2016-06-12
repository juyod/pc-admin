/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.feedback', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        templateUrl: 'app/pages/feedback/feedback.html',
        controller: 'feedbackCtrl',
        title: '意见反馈',
        sidebarMeta: {
          icon: 'fa fa-commenting-o',
          order: 8
        }
      });
  }
})();
