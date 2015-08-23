'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	// The name `constructor` is important here
	constructor: function () {
		// Calling the super constructor is important so our generator is correctly set up
		generators.Base.apply(this, arguments);
	},
	packagejson: function() {
		this.fs.copyTpl(
			this.templatePath('package.json'),
			this.destinationPath('./package.json'),
			{}
		);
	},
	dependencies: function() {
		this.npmInstall([
			'gulp',
			'watchify',
			'browserify',
			'vinyl-source-stream',
			'vinyl-buffer',
			'gulp-util',
			'gulp-sourcemaps',
			'lodash.assign',
			'babelify',
			'gulp-webserver'
		], { 'saveDev': true });
		// this.npmInstall([
		// 	'react',
		// 	'jquery',
		// 	'backbone'
		// ], { 'save': true });
	},
	indexfile: function() {
		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath('./index.html'),
			{}
		);
	},
	gulpfile: function() {
		this.fs.copyTpl(
			this.templatePath('gulpfile.js'),
			this.destinationPath('./gulpfile.js'),
			{}
		);
	},
	mainfile: function() {
		this.fs.copyTpl(
			this.templatePath('scripts/main.js'),
			this.destinationPath('./scripts/main.js'),
			{}
		);
	},
	gitignore: function() {
		this.fs.copyTpl(
			this.templatePath('gitignore'),
			this.destinationPath('./.gitignore'),
			{}
		);
	},
	directories: function() {
		this.fs.copyTpl(
			this.templatePath('.gitkeep'),
			this.destinationPath('./scripts/models/.gitkeep'),
			{}
		);
		this.fs.copyTpl(
			this.templatePath('.gitkeep'),
			this.destinationPath('./scripts/collections/.gitkeep'),
			{}
		);
		this.fs.copyTpl(
			this.templatePath('.gitkeep'),
			this.destinationPath('./scripts/components/.gitkeep'),
			{}
		);
		this.fs.copyTpl(
			this.templatePath('.gitkeep'),
			this.destinationPath('./images'),
			{}
		);
	}
});