/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  sass = require('gulp-ruby-sass');
  cleanCSS = require('gulp-clean-css');
  minify = require('gulp-minify');



/*
* Configuración de la tarea 'javascript'
*/
gulp.task('javascript', function () {
  gulp.src(['../bower/bower_components/jquery/dist/jquery.js', '../js/function.js', '../js/main.js'])
  .pipe(concat('minifyjavascript.js'))
  .pipe(uglify())
  .pipe(gulp.dest('../js/'))
});
/*
* Configuración de la tarea 'sass'
*/
gulp.task('styles', function() {
 sass (['../scss/header.scss', '../scss/main.scss' ])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('minifycss.css'))
    .pipe(gulp.dest('../css/'))
})

gulp.task('alltask', ['javascript','styles']);

