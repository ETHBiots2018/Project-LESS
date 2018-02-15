/* Gulpfile.js for tinybits */

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');


// set default task to run on 'gulp'
gulp.task('default', ['sass']);

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// compile sass
gulp.task('sass', function() {
  gulp.src('scss/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 8 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'))
     //only minify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? cssnano({zindex: false}) : gutil.noop())
    .pipe(gulp.dest('user/themes/tinybits/css/'));
});


// watching scss and js files
gulp.task('watch', ['sass'], function() {
    gulp.watch("scss/*.scss", ['sass']);

});
