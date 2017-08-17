'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('watch', ['browserSync', 'nodemon'], function () {
	gulp.watch(config.watch.scripts,    ['lint']);
	gulp.watch(config.watch.css,        ['css']);
	gulp.watch(config.watch.stylus,     ['stylus']);
	gulp.watch(config.watch.images,     ['images']);
	gulp.watch(config.watch.views,      ['views']);
	gulp.watch(config.test.source,      ['test']);
});