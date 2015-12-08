var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 9000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./demo/*.html')
    .pipe(connect.reload());
});

gulp.task('demo-js', function () {
  gulp.src('./demo/*.js')
    .pipe(connect.reload());
});

gulp.task('src-js', function () {
  gulp.src('./src/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./demo/*.html'], ['html']);
  gulp.watch(['./demo/*.js'], ['demo-js']);
  gulp.watch(['./src/*.js'], ['src-js']);
});

gulp.task('default', ['connect', 'watch']);