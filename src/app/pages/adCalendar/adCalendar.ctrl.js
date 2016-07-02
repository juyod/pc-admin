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
  function adCalendarCtrl($scope, adCalendarService, $filter, adService, userService, areaService, toastr, $timeout, $uibModal) {
    var now = new Date(),
      element = null,
      vm = this;
    $scope.params = {
      startDate: new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000),
      endDate: new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000),
      sceneCode: ''
    };
    $scope.status = {
      showList: false,
      areaList: [],
      curAd: {

      }
    };

    var makeCalendar = function(events) {
      events = events || [];
      $timeout(function() {
        if (element) {
          element.fullCalendar('destroy');
          element.empty();
        }
        element = $('#calendar').fullCalendar({
          lang: 'zh-cn',
          columnFormat: {
            month: 'ddd',
            week: 'ddd MM/dd',
            day: 'dddd MM/dd'
          },
          firstDay: 0,
          axisFormat: 'HH:mm', //,'h(:mm)tt',
          timeFormat: {
            agenda: 'HH:mm' //h:mm{ - h:mm}'
          },
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
          eventMouseover: function(calEvent, jsEvent) {
            var oe = jsEvent.originalEvent;
            $scope.tooltipStyle = {
              'top': oe.clientY,
              'left': oe.clientX
            };
            $scope.status.curAd = calEvent;
            vm.showAd();
            vm.cancelHideAd();
          },
          eventMouseout: function() {
            vm.hideAd();
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
      }, function() {
        makeCalendar();
      });
    };
    vm.switchView = function() {
      $scope.status.showList = !$scope.status.showList;
      if (!$scope.status.showList) {
        makeCalendar(adCalendarService.adToCalendarEvent(vm.adList));
      }
    };
    vm.goToday = function() {
      $scope.params.startDate = new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000);
      $scope.params.endDate = new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000);
    };
    vm.prev = function() {
      $scope.params.startDate = new Date($scope.params.startDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      $scope.params.endDate = new Date($scope.params.endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    };
    vm.next = function() {
      $scope.params.startDate = new Date($scope.params.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      $scope.params.endDate = new Date($scope.params.endDate.getTime() + 7 * 24 * 60 * 60 * 1000);
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
        $scope.status.showAdDetail = false;
      });
    };
    vm.showAd = function() {
      $scope.status.showAdDetail = true;
      $scope.$apply();
    };
    vm.hideAd = function() {
      $scope.status.timeoutPromise = $timeout(function() {
        $scope.status.showAdDetail = false;
      }, 250);
    };
    vm.cancelHideAd = function() {
      if ($scope.status.timeoutPromise) {
        $timeout.cancel($scope.status.timeoutPromise);
      }
    };
    areaService.loadAreaList().then(function(data) {
      $scope.status.areaList = data;
      if (data && data.length > 0) {
        $scope.params.sceneCode = data[0].SCENE_CODE || '';
      }
      $scope.$watch('params', vm.query);
    }, function() {
      $scope.$watch('params', vm.query);
    });
  }

  /** @ngInject */
  function offShelfModalCtrl($scope, $uibModalInstance) {
    $scope.ok = function() {
      $uibModalInstance.close();
    };
    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }
})();
