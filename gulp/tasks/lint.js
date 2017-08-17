'use strict';

var config = require('../config');
var gulp   = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {
	return gulp.src(config.scripts.src)
		.pipe(eslint())
		.pipe(eslint.faillOnError())
		.pipe(eslint.result(result => {
			// Called for each ESLint result. 
			console.log(`ESLint result: ${result.filePath}`);
			console.log(`# Messages: ${result.messages.length}`);
			console.log(`# Warnings: ${result.warningCount}`);
			console.log(`# Errors: ${result.errorCount}`);
		})); 
});