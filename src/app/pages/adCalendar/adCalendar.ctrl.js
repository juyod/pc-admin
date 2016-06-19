/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';
  angular.module('PCAdmin.pages.adCalendar')
    .controller('adCalendarCtrl', adCalendarCtrl);

  /** @ngInject */
  function adCalendarCtrl(baConfig, adCalendarService, $filter) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      header: {
        left: 'prev,next',
        center: 'title',
        right: ' '
      },
      defaultView: 'agendaWeek',
      defaultDate: $filter('date')(new Date(), 'yyyy-MM-dd'),
      selectable: false,
      selectHelper: false,
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: []
    });
  }
})();
