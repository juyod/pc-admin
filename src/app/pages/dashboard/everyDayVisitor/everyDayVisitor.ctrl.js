/**
 * @author lgc
 */
(function() {
  'use strict';

  angular.module('PCAdmin.pages.dashboard')
    .controller('everyDayVisitorCtrl', everyDayVisitorCtrl);

  /** @ngInject */
  function everyDayVisitorCtrl($scope, everyDayVisitorSevice, areaService, $filter, baUtil, baConfig, layoutPaths) {
    $scope.params = {
      area: '',
      advertCode: '',
      queryDate: new Date()
    };
    $scope.data = {
      areaList: [],
      adList: []
    };
    var layoutColors = baConfig.colors;
    var graphColor = baConfig.theme.blur ? '#000000' : layoutColors.primary;
    var makeChart = function(chartData) {
      var myChart = echarts.init(document.getElementById('everDayChart'));
      var option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            var data = params[0].data;
            return $filter('date')(data[0], 'HH:mm') + ' 造访量:' + data[1];

          }
        },
        legend: {
          show: false,
        },
        toolbox: {
          show: false
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          min: 0
        },
        series: [{
          name: '访问量',
          type: 'line',
          smooth: true,
          areaStyle: {
            normal: {
              color: graphColor,
              opacity: 0.7
            }
          },
          data: chartData
        }]
      };
      myChart.setOption(option);
    };

    areaService.loadAreaList().then(function(data) {
      $scope.data.areaList = data;
    });
    $scope.query = function() {
      var queryParams = angular.copy($scope.params);
      queryParams.queryDate = $filter('date')(queryParams.queryDate, 'yyyyMMdd');
      everyDayVisitorSevice.loadAdVisitCntGrowthRate(queryParams).then(function(data) {
        makeChart(data);
      });
    };
    $scope.query();

  }
})();
