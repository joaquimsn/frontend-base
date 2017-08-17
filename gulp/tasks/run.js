'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('run', ['clean'], function (cb) {

	switch (process.env.NODE_ENV) {
	case 'development':

		global.isProd = false;
		runSequence(['stylus', 'css', 'fonts', 'images', 'app', 'move'], 'watch', cb);

		break;
	case 'production':

		global.isProd = true;
		runSequence(['stylus', 'css', 'fonts', 'images', 'app', 'move'], 'gzip', cb);

		break;

	default:
		console.log('**************************************');
		console.log('********* NODE_ENV undefined *********');
		console.log('**************************************');
	}

});