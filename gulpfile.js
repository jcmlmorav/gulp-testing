var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//Tarea para compilar sass
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
    	outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//Tarea para unir los js
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass']);
