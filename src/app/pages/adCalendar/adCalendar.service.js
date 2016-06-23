(function() {
  'use strict';
  /** @ngInject */
  angular.module('PCAdmin.pages.adCalendar').factory('adCalendarService', function($q, fetchUtil, baConfig) {
    var getAdvertCalendar = function(params) {
      var defer = $q.defer();
      fetchUtil.jsonp('adbms/AdvertStatis_getAdvertCalendar.do', params).then(function(data) {
        defer.resolve(data.resultList);
      }, function() {
        defer.reject();
      });
      return defer.promise;
    };
    var getColorByStatus = function(status) {
      if (status === '已投放') {
        return baConfig.colors.adCalendarColors.over;
      } else if (status === '投放中') {
        return baConfig.colors.adCalendarColors.playing;
      } else if (status === '即将投放') {
        return baConfig.colors.adCalendarColors.toPlay;
      } else if (status === '下架申请中') {
        return baConfig.colors.adCalendarColors.toOff;
      } else if (status === '已下架') {
        return baConfig.colors.adCalendarColors.offed;
      }

    };
    var adToCalendarEvent = function(adList) {
      var events = [];
      angular.forEach(adList, function(v) {
        var tempDate = new Date(v.STATIS_TIME);
        var endTime = new Date(tempDate.setHours(v.CAL_TIME.split(':')[0]));
        var startTime = new Date(tempDate.setHours(v.CAL_TIME.split(':')[0] - 1));
        events.push(angular.merge({
          title: v.ADVERT_NAME + '\n' + 'id:' + v.ADVERT_CODE + '\n' + v.STATUS,
          start: $.fullCalendar.moment(startTime),
          end: $.fullCalendar.moment(endTime),
          allDay: v.IS_PUT_SUB_PERIODS === '0',
          color: getColorByStatus(v.STATUS)
        }, v));
      });
      return events;
    };
    return {
      getAdvertCalendar: getAdvertCalendar,
      adToCalendarEvent: adToCalendarEvent
    };
  });
})();
