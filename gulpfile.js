var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('sass', function() {
  return gulp.src(['./scss/main.scss','./scss/buttons.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat-css', function() {
  return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css','./css/main.css','./css/buttons.css'])
    .pipe(concat('all.css'))
    .pipe(cleanCss({keepSpecialComments:false}))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat-js', function() {
  return gulp.src(['./bower_components/jquery/dist/jquery.min.js','./js/main.js'])
    .pipe(concat('all.js'))
    .pipe(minify())
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['sass', 'concat-css', 'concat-js']);