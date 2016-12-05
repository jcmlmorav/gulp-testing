var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var config = {
    scssDir: './assets/scss',
    cssDir: './assets/css',
    jsDir: './assets/js',
    jsDirLibs: './assets/libs'
};

gulp.task('style', function() {
    return gulp.src(config.scssDir  + '/*scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(cssnano())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.cssDir))
});

//gulp concat
gulp.task('concat', function() {
    return gulp.src([
        config.jsDirLibs + '/bower_components/jquery/dist/jquery.min.js',
        config.jsDir + '/main.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.jsDir))
});

//gulp compress
gulp.task('compress', ['concat'], function() {
    return gulp.src(config.jsDir + '/scripts.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(config.jsDir + '/min'))
});

//gulp watch
gulp.task('watch', function() {
    watch(config.scssDir + '/**/*.scss', function(){
        gulp.start('style');
    });
});