'use strict';

/*
 * Configurações globais para o Gulp responsável por mapear a origem e destino
 * dos arquivos.
 **/
module.exports = {

	'browserPort': 3002,
	'UIPort': 3001,
	'serverPort': 3000,

	'watch': {
		'scripts': ['src/js/modules/*.js', 'src/js/modules/**/*.js', 'src/js/*.js'],
		'styles': 'src/resources/styles/css/*.css',
		'images': ['src/resources/images/*'],
		'views': ['src/views/*.pug', 'src/views/**/*.pug', 'src/views/**/**/*.pug']
	},
	'nodemon': {
		'script': 'servidor/bin/www',
		'ext': 'js',
		'env': 'development',
		'watch': 'servidor/'
	},
	'css': {
		'src': ['src/resources/styles/css/*.css', 'src/resources/styles/css/**/*.css'],
		'dest': 'build/resources/css'
	},
	'stylus': {
		'src': ['src/resources/styles/stylus/*.styl'],
		'dest': 'build/resources/css'
	},
	'scripts': {
		'src': ['src/js/**/*.js', 'src/js/**/**/*.js'],
		'dest': 'build/js'
	},
	'move': {
		'src': ['src/resources/vendors'],
		'dest': 'build/resources/vendors'
	},
	'images': {
		'src': ['src/resources/images/*', 'src/resources/images/**/*'],
		'dest': 'build/resources/images'
	},
	'fonts': {
		'src': ['src/resources/fonts/*', 'src/resources/fonts/**/*'],
		'dest': 'build/resources/fonts'
	},
	'app': {
		'src': ['src/resources/app/*'],
		'dest': 'build/resources/app'
	},
	'gzip': {
		'src': 'build/**/*.{html,xml,json,css,js,js.map}',
		'dest': 'build/',
		'options': {}
	},
	'dist': {
		'root': 'build'
	},
	'test': {
		'source': [
			'src/js/test/modules/**/*Spec.js',
			'back/test/modules/**/*Spec.js'
		],
		'jade': {
			'source': 'back/modules/**/views/*.jade',
			'dest': 'src/js/test/templates'
		}
	}

};