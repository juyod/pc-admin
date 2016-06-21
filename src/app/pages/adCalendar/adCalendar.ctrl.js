/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';
  angular.module('PCAdmin.pages.adCalendar')
    .controller('adCalendarCtrl', adCalendarCtrl);

  /** @ngInject */
  function adCalendarCtrl($scope, baConfig, adCalendarService, $filter) {
    var dashboardColors = baConfig.colors.dashboard;
    var now = new Date();
    var firstOfWeek = new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000);
    var endOfWeek = new Date(now.getTime() + (7 * now.getDay()) * 24 * 60 * 60 * 1000);
    $scope.params = {
      startDate: firstOfWeek,
      endDate: endOfWeek,
      sceneCode: 'N01C01T01A04Y01'
    };
    $scope.adList = [];
    var query = function() {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyy-MM-dd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyy-MM-dd');
      adCalendarService.getAdvertCalendar(queryParams).then(function(data) {
        $scope.adList = angular.copy(data);
        var events = adCalendarService.adToCalendarEvent(data);
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
          editable: false,
          eventLimit: true, // allow "more" link when too many events
          displayEventTime: false,
          events: events,
          eventClick: function(calEvent, jsEvent, view) {
            console.log(calEvent);

          }
        });
      });
    }
    $scope.$watch('params', query);
  }
})();
