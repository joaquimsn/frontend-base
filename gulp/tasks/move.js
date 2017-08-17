'use strict';

var config = require('../config');
var gulp = require('gulp');
var recursiveFolder = require('gulp-recursive-folder');
var handleErrors = require('../util/handleErrors');

// Copia os folders recursive
gulp.task('move', recursiveFolder({
	base: config.move.src
},
function(folderFound) {
	return gulp.src(folderFound.path + '/*')
		.pipe(gulp.dest(config.move.dest + '/' + folderFound.pathTarget))
		.on('error', handleErrors);
}));