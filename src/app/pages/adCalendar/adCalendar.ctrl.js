/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';
  angular.module('PCAdmin.pages.adCalendar')
    .controller('adCalendarCtrl', adCalendarCtrl);
  /** @ngInject */
  function adCalendarCtrl($scope, adCalendarService, $filter, adService, toastr) {
    var now = new Date(),
      element = null,
      vm = this;
    $scope.params = {
      startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000),
      sceneCode: 'N01C01T01A04Y01'
    };
    $scope.status = {
      showList: true
    };
    var makeCalendar = function(events) {
      if (element) {
        element.fullCalendar('destroy');
      }
      element = $('#calendar').fullCalendar({
        header: {
          left: '',
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
    };
    vm.query = function() {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyy-MM-dd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyy-MM-dd');
      adCalendarService.getAdvertCalendar(queryParams).then(function(data) {
        vm.adList = data;
        makeCalendar(adCalendarService.adToCalendarEvent(data));
      });
    };
    vm.adOffShelf = function(ad) {
      debugger;
      var postParams = {

      }
      adService.adOffShelf().then(function() {
        toastr.pop({
          type: 'success',
          body: '下架成功',
          timeout: 2000
        });

      }, function(message) {
        toastr.pop({
          type: 'error',
          body: message,
          timeout: 2000
        });

      })

    }
    $scope.$watch('params', vm.query)
  }
})();
