/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';
  angular.module('PCAdmin.pages.adCalendar')
    .controller('adCalendarCtrl', adCalendarCtrl);

  /** @ngInject */
  function adCalendarCtrl($scope, adCalendarService, $filter) {
    var now = new Date();
    var element = null;
    $scope.params = {
      startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000),
      sceneCode: 'N01C01T01A04Y01'
    };
    $scope.status = {
      showList: true,
    };
    $scope.adList = [];
    var query = function() {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyy-MM-dd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyy-MM-dd');
      adCalendarService.getAdvertCalendar(queryParams).then(function(data) {
        $scope.adList = angular.copy(data);
        var events = adCalendarService.adToCalendarEvent(data);
        element = $('#calendar').fullCalendar({
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
          eventClick: function(calEvent) {
            console.log(calEvent);

          }
        });
      });
    };
    $scope.$watch('params', query);
  }
})();
