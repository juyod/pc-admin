/**
 * Created by k.danovsky on 13.05.2016.
 */

(function() {
  'use strict';

  var basic = {
    default: '#ffffff',
    defaultText: '#666666',
    border: '#dddddd',
    borderDark: '#aaaaaa'
  };

  // main functional color scheme
  var colorScheme = {
    primary: '#d7b42f',
    info: '#2dacd1',
    success: '#90b900',
    warning: '#dfb81c',
    danger: '#e85656'
  };

  // dashboard colors for charts
  var dashboardColors = {
    blueStone: '#dfb81c',
    surfieGreen: '#FFC400',
    silverTree: '#FFD740',
    gossip: '#FFB300',
    white: '#FFCA28'
  };
  var adCalendarColors = {
    over: '#e85656',
    playing: '#FFC400',
    toPlay: '#2dacd1',
    toOff: '#90b900',
    offed: '#666666'
  };
  angular.module('PCAdmin.theme')
    .provider('baConfig', configProvider);

  /** @ngInject */
  function configProvider(colorHelper) {
    var conf = {
      theme: {
        blur: false,
      },
      colors: {
        default: basic.default,
        defaultText: basic.defaultText,
        border: basic.border,
        borderDark: basic.borderDark,

        primary: colorScheme.primary,
        info: colorScheme.info,
        success: colorScheme.success,
        warning: colorScheme.warning,
        danger: colorScheme.danger,

        primaryLight: colorHelper.tint(colorScheme.primary, 30),
        infoLight: colorHelper.tint(colorScheme.info, 30),
        successLight: colorHelper.tint(colorScheme.success, 30),
        warningLight: colorHelper.tint(colorScheme.warning, 30),
        dangerLight: colorHelper.tint(colorScheme.danger, 30),

        primaryDark: colorHelper.shade(colorScheme.primary, 15),
        infoDark: colorHelper.shade(colorScheme.info, 15),
        successDark: colorHelper.shade(colorScheme.success, 15),
        warningDark: colorHelper.shade(colorScheme.warning, 15),
        dangerDark: colorHelper.shade(colorScheme.danger, 15),
        adCalendarColors: adCalendarColors,
        dashboard: {
          blueStone: dashboardColors.blueStone,
          surfieGreen: dashboardColors.surfieGreen,
          silverTree: dashboardColors.silverTree,
          gossip: dashboardColors.gossip,
          white: dashboardColors.white,
        },
      }
    };

    conf.changeTheme = function(theme) {
      angular.merge(conf.theme, theme);
    };
    conf.changeColors = function(colors) {
      angular.merge(conf.colors, colors);
    };
    conf.$get = function() {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();
