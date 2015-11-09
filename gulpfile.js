var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();
/*
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	compass = require('gulp-compass'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	stribDebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	liveReload = require('gulp-live-reload');
*/

var onError = function(err) {
    console.log(err);
};

// Lets us type "gulp" on the command line and run all of our tasks
gulp.task('default', ['copyfiles', 'compass', 'jshint', 'scripts', 'watch']);

gulp.task('copyfiles', function() {
    gulp.src('./src/vendors/fontawesome/fonts/*.{ttf,woff,eof,svg,otf,eot}')
    .pipe(gulp.dest('./src/fonts'));
});

//Compile .scss files to get the css styles
gulp.task('compass', function() {
	gulp.src('./src/sass/*.scss')
		.pipe(plugins.plumber({
			errorHandler: onError
 		}))
		.pipe(plugins.compass({
			config_file : 'src/config.rb',
			css : 'src/css',
			sass: 'src/sass'
		}))
		.pipe(gulp.dest('src/css'))
		.pipe(plugins.notify({ message: 'Booterfly - Compass task complete - ' + new Date().getTime() }));
});

//Check if the JavaScript files are well-formed
gulp.task('jshint', function() {
	return gulp.src('./src/js/*.js')
    	.pipe(plugins.plumber({
        	errorHandler: onError
    	}))
    	.pipe(plugins.jshint())
    	.pipe(plugins.jshint.reporter('default'))
    	.pipe(plugins.notify({ message: 'Booterfly - JS Hint task complete - ' + new Date().getTime() }));
});

//Combine and minify JavaScript
gulp.task('scripts', function() {
   	 return gulp.src('./src/js/*.js')
        	.pipe(plugins.plumber({
            		errorHandler: onError
        	}))
        	.pipe(plugins.concat('booterfly.min.js'))
        	.pipe(plugins.stripDebug())
        	.pipe(plugins.uglify())
        	.pipe(gulp.dest('./src/js/'))
        	.pipe(plugins.notify({ message: 'Booterfly - Scripts task complete - ' + new Date().getTime() }));
});

//Keep glunt alive and executing over changes
gulp.task('watch', function() {
    // Check for modifications in particular directories

    // Whenever a stylesheet is changed, recompile
    gulp.watch(__dirname + '/src/sass/**/*.scss', ['compass']);

    // If user-developed Javascript is modified, re-run our hinter and scripts tasks
    gulp.watch(__dirname + '/src/js/**/*.js', ['jshint', 'scripts']);

    // If an image is modified, run our images task to compress images
    //gulp.watch('./src/images/**/*', ['images']);

    // Create a LiveReload server
    var server = plugins.livereload;
		server.listen({ start: true });
    // Watch any file for a change in the 'src' folder and reload as required

    gulp.watch([__dirname + '/src/**']).on('change', function(file) {
        server.changed(file.path);
    });
});
