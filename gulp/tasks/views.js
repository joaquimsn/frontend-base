'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync  = require('browser-sync');

// Views task
gulp.task('views', function () {
  browserSync.reload();
});