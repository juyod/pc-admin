'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function () {
  browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles', 'injectAuth', 'inject404', 'copyVendorImages'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/main.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], {
    read: false
  });

  var injectScripts = gulp.src([
      path.join(conf.paths.src, '/assets/js/**/*.js'),
      path.join(conf.paths.src, '/app/**/*.module.js'),
      path.join(conf.paths.src, '/app/**/*.service.js'),
      path.join(conf.paths.src, '/app/**/*.ctrl.js'),
      path.join(conf.paths.src, '/app/**/*.js'),
      path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
      path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
      path.join('!' + conf.paths.src, '/app/auth/*.js'),
    ])
    /*.pipe($.angularFilesort())*/
    .on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/index.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

gulp.task('injectAuth', ['stylesAuth'], function () {
  return injectAlone({
    css: [path.join('!' + conf.paths.tmp, '/serve/app/vendor.css'), path.join(conf.paths.tmp, '/serve/app/auth.css')],
    paths: [path.join(conf.paths.src, '/auth.html'), path.join(conf.paths.src, '/reg.html')]
  });
});

gulp.task('inject404', ['styles404'], function () {
  return injectAlone({
    css: [path.join('!' + conf.paths.tmp, '/serve/app/vendor.css'), path.join(conf.paths.tmp, '/serve/app/404.css')],
    paths: path.join(conf.paths.src, '/404.html')
  });
});

var injectAlone = function (options) {
  var injectStyles = gulp.src(
    options.css, {
      read: false
    });
  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };
  var injectAuthScripts = gulp.src([
      path.join(conf.paths.src, '/assets/js/**/*.js'),
      path.join(conf.paths.src, '/app/base/*.module.js'),
      path.join(conf.paths.src, '/app/base/*.constants.js'),
      path.join(conf.paths.src, '/app/base/services/*.js'),
      path.join(conf.paths.src, '/app/base/util/*.js'),
      path.join(conf.paths.src, '/app/auth/*.module.js'),
      path.join(conf.paths.src, '/app/auth/*.service.js'),
      path.join(conf.paths.src, '/app/auth/*.ctrl.js'),
    ])
    /*.pipe($.angularFilesort())*/
    .on('error', conf.errorHandler('AngularFilesort'));
  return gulp.src(options.paths)
    .pipe($.inject(injectStyles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.inject(injectAuthScripts, injectOptions))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
};
