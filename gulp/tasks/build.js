'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
	global.isProd = true;
	runSequence('clean', 
		[
			'stylus',
			'css', 
			'fonts', 
			'images', 
			'app', 
			'move',
		],
		'gzip', cb);
		
	return;
});