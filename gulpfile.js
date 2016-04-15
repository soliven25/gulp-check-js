var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    del = require('del');

gulp.task('process-styles', function(){

});

gulp.task('combine:js', function(){
	gulp.src(['./1-List.js', './2-Reward.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(concat('combined.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
	
});

gulp.task('check',function(){
	gulp.src(['./**/*.js','!./node_modules/**'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default',function(){
	console.log("I have configured a gulpfile");
});

gulp.task('clean', function(){
	del(['dist/*']);
});
