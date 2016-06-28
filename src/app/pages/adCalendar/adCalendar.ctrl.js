/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';
  angular.module('PCAdmin.pages.adCalendar')
    .controller('adCalendarCtrl', adCalendarCtrl)
    .controller('offShelfModalCtrl', offShelfModalCtrl);
  /** @ngInject */
  function adCalendarCtrl($scope, adCalendarService, $filter, adService, userService, toastr, $timeout, $uibModal) {
    var now = new Date(),
      element = null,
      vm = this;
    $scope.params = {
      startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000),
      sceneCode: 'N01C01T01A04Y01'
    };
    $scope.status = {
      showList: false
    };
    var makeCalendar = function(events) {
      $timeout(function() {
        if (element) {
          element.fullCalendar('destroy');
          element.empty();
        }
        element = $('#calendar').fullCalendar({
          header: {
            left: '',
            center: 'title',
            right: ' '
          },
          defaultView: 'agendaWeek',
          defaultDate: $filter('date')($scope.params.startDate, 'yyyy-MM-dd'),
          selectable: false,
          selectHelper: false,
          editable: false,
          eventLimit: true, // allow "more" link when too many events
          displayEventTime: false,
          events: events,
          eventClick: function(calEvent) {

          }
        });
      });
    };
    vm.query = function() {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyy-MM-dd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyy-MM-dd');
      adCalendarService.getAdvertCalendar(queryParams).then(function(data) {
        vm.adList = data;
        if (!$scope.status.showList) {
          makeCalendar(adCalendarService.adToCalendarEvent(vm.adList));
        }
      });
    };
    vm.switchView = function() {
      $scope.status.showList = !$scope.status.showList;
      if (!$scope.status.showList) {
        makeCalendar(adCalendarService.adToCalendarEvent(vm.adList));
      }
    };
    vm.goToday = function() {
      $scope.params = {
        startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
        endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000),
        sceneCode: 'N01C01T01A04Y01'
      };
    };
    vm.prev = function() {
      $scope.params = {
        startDate: new Date($scope.params.startDate.getTime() - 7 * 24 * 60 * 60 * 1000),
        endDate: new Date($scope.params.endDate.getTime() - 7 * 24 * 60 * 60 * 1000),
        sceneCode: 'N01C01T01A04Y01'
      };
    };
    vm.next = function() {
      $scope.params = {
        startDate: new Date($scope.params.startDate.getTime() + 7 * 24 * 60 * 60 * 1000),
        endDate: new Date($scope.params.endDate.getTime() + 7 * 24 * 60 * 60 * 1000),
        sceneCode: 'N01C01T01A04Y01'
      };
    };

    var adOffShelf = function(ad) {
      var postParams = {
        advertCode: ad.ADVERT_CODE,
        overDate: ad.CAL_DATE,
        applyUserId: userService.getUser().id
      };
      adService.adOffShelf(postParams).then(function() {
        toastr.success('下架成功');
      }, function(message) {
        toastr.error(message);
      });
    };
    vm.showOffsetModal = function(ad) {
      $uibModal.open({
        animation: true,
        controller: 'offShelfModalCtrl',
        templateUrl: 'app/pages/adCalendar/adOffShelf.modal.html'
      }).result.then(function() {
        adOffShelf(ad);
      });
    };
    $scope.$watch('params', vm.query);
  }

  /** @ngInject */
  function offShelfModalCtrl($scope, $uibModalInstance) {
    $scope.ok = function() {
      $uibModalInstance.close();
    }
    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    }
  }
})();
