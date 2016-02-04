'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());;
});

gulp.task('watch', function () {
    browserSync.init({
        proxy: "dev.interactive-radio.com",
        browser: "firefox"
    });
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch("./public/**/*.html").on('change', browserSync.reload);
});
