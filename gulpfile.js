var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('scss/style.sass') // Leer un archivo
		.pipe(sass()) // Compilar SASS
		.pipe(gulp.dest('css')); // Guardar archivo
});

gulp.task('watch', function() {
	gulp.watch('scss/style.sass', ['sass']);
});

gulp.task('default', ['sass']);
