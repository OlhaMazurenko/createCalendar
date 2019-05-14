var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass', 'browser-sync'));
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass'));