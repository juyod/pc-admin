/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('PCAdmin.pages.ui', [
    'PCAdmin.pages.ui.typography',
    'PCAdmin.pages.ui.buttons',
    'PCAdmin.pages.ui.icons',
    'PCAdmin.pages.ui.modals',
    'PCAdmin.pages.ui.grid',
    'PCAdmin.pages.ui.alerts',
    'PCAdmin.pages.ui.progressBars',
    'PCAdmin.pages.ui.notifications',
    'PCAdmin.pages.ui.tabs',
    'PCAdmin.pages.ui.slider',
    'PCAdmin.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
