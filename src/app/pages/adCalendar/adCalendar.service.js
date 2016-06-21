(function() {
  'use strict';
  /** @ngInject */
  angular.module('PCAdmin.pages.adCalendar').factory('adCalendarService', function($q, fetchUtil) {
    var getAdvertCalendar = function(params) {
      var defer = $q.defer();
      fetchUtil.jsonp('adbms/AdvertStatis_getAdvertCalendar.do', params).then(function(data) {
        defer.resolve(data.resultList);
      }, function() {
        defer.reject();
      });
      return defer.promise;
    };
    var adToCalendarEvent = function(adList) {
      var events = [];
      angular.forEach(adList, function(v) {
        var tempDate = new Date(v.STATIS_TIME);
        var endTime = new Date(tempDate.setHours(v.CAL_TIME.split(':')[0]))
        var startTime = new Date(tempDate.setHours(v.CAL_TIME.split(':')[0] - 1))
        events.push(angular.merge({
          title: v.ADVERT_NAME + '\n' + 'id:' + v.ADVERT_CODE + '\n' + v.STATUS,
          start: $.fullCalendar.moment(startTime),
          end: $.fullCalendar.moment(endTime),
          description: 'long description3',
          allDay: v.IS_PUT_SUB_PERIODS === '0'
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
