/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.memberInfo', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('memberInfo', {
        url: '/memberInfo',
        templateUrl: 'app/pages/memberInfo/memberInfo.html',
        title: '会员资料',
        sidebarMeta: {
          icon: 'fa fa-user',
          order: 1
        }
      });
  }
})();
