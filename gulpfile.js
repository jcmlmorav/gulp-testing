var gulp = require('gulp');
var sass = require('gulp-sass');

//Tarea para compilar sass
gulp.task('compilarsass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/main.css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['compilarsass']);
});

// Default Task
gulp.task('default', ['watch']);