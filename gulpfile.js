var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('concat-js', function() {
    gulp.src([
            'bower_components/jquery-1.11.1/dist/jquery.min.js',
            'js/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('minify-js', function () {
    gulp.src('js/app.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'));
});

gulp.task('default', ['sass', 'minify-css', 'minify-js']);
