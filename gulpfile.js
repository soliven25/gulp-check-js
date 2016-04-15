var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('check',function(){
	gulp.src(['./**/*.js','!./node_modules/**'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default',function(){
	console.log("place yur *.js and run 'gulp check' ");
});

