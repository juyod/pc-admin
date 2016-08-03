/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
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
      selectScence: '',
      curAd: {

      }
    };
    var hideNoEventTime = function () {
      var timeEndElementEnd = $('#calendar').find('.fc-minor');
      if (vm.events.length <= 0) {
        $('.fc-body').hide();
        return;
      }
      for (var i = 0; i < timeEndElementEnd.length; i++) {
        var hasEvent = false;
        for (var j = 0; j < vm.events.length; j++) {
          if (parseInt(vm.events[j].startTime.format('HH')) === j) {
            hasEvent = true;
          }
        }
        if (!hasEvent) {
          $(timeEndElementEnd[i]).hide();
          $(timeEndElementEnd[i]).prev().hide();
        }
      }
    };
    var makeCalendar = function (events) {
      events = events || [];
      vm.events = events;
      $timeout(function () {
        if (element) {
          element.fullCalendar('destroy');
          element.empty();
        }
        element = $('#calendar').fullCalendar({
          lang: 'zh-cn',
          columnFormat: {
            month: 'ddd',
            week: 'ddd (MM/dd)',
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
          eventMouseover: function (calEvent, jsEvent) {
            var oe = jsEvent.originalEvent;
            $scope.adToolTipShow = {
              'top': (oe.clientY + 20) + 'px',
              'left': (oe.clientX - 250) + 'px'
            };
            console.log($scope.adToolTipShow);
            $scope.status.curAd = calEvent;
            vm.showAd();
            vm.cancelHideAd();
          },
          eventMouseout: function () {
            vm.hideAd();
          }
        });
      });
      setTimeout(function () {
        hideNoEventTime();
      }, 10);
    };
    vm.query = function () {
      var queryParams = angular.copy($scope.params);
      queryParams.startDate = $filter('date')(queryParams.startDate, 'yyyy-MM-dd');
      queryParams.endDate = $filter('date')(queryParams.endDate, 'yyyy-MM-dd');
      adCalendarService.getAdvertCalendar(queryParams).then(function (data) {
        vm.adList = data;
        if (!$scope.status.showList) {
          makeCalendar(adCalendarService.adToCalendarEvent(vm.adList));
        }
      }, function () {
        makeCalendar();
      });
    };
    vm.switchView = function () {
      $scope.status.showList = !$scope.status.showList;
      if (!$scope.status.showList) {
        makeCalendar(adCalendarService.adToCalendarEvent(vm.adList));
      }
    };
    vm.goToday = function () {
      $scope.params.startDate = new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000);
      $scope.params.endDate = new Date(now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000);
      vm.query();
    };
    vm.prev = function () {
      $scope.params.startDate = new Date($scope.params.startDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      $scope.params.endDate = new Date($scope.params.endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      vm.query();
    };
    vm.next = function () {
      $scope.params.startDate = new Date($scope.params.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      $scope.params.endDate = new Date($scope.params.endDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      vm.query();
    };

    var adOffShelf = function (ad) {
      var postParams = {
        advertCode: ad.ADVERT_CODE,
        overDate: ad.STATIS_TIME,
        applyUserId: userService.getUser().id
      };
      adService.adOffShelf(postParams).then(function (message) {
        toastr.success(message);
      }, function (message) {
        toastr.error(message);
      });
      vm.query();
    };
    vm.showOffsetModal = function (ad) {
      if (!ad && $scope.status.showAdDetail) {
        ad = $scope.status.curAd;
      }
      $uibModal.open({
        animation: true,
        size: 'sm',
        controller: 'offShelfModalCtrl',
        templateUrl: 'app/pages/adCalendar/adOffShelf.modal.html'
      }).result.then(function () {
        adOffShelf(ad);
        $scope.status.showAdDetail = false;
      });
    };
    vm.showAd = function () {
      $timeout(function () {
        $scope.adToolTipShow = true;
      }, 250);
    };
    vm.hideAd = function () {
      $scope.status.timeoutPromise = $timeout(function () {
        $scope.adToolTipShow = false;
      }, 250);
    };
    vm.cancelHideAd = function () {
      if ($scope.status.timeoutPromise) {
        $timeout.cancel($scope.status.timeoutPromise);
      }
    };
    areaService.loadAreaList().then(function (data) {
      $scope.status.areaList = data;
      if (data && data.length > 0) {
        $scope.params.sceneCode = data[0].SCENE_CODE || '';
      }
    }, function () {});
    $scope.$watch('params', vm.query);
  }

  /** @ngInject */
  function offShelfModalCtrl($scope, $uibModalInstance) {
    $scope.ok = function () {
      $uibModalInstance.close();
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss();
    };
  }
})();
