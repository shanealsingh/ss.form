var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: './demo',
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
  var files = gulp.src('./src/*.js');

  var stream = files
                 .pipe(concat('ss-form.js'))
                 .pipe(gulp.dest('./demo'))
                 .pipe(gulp.dest('./dist'));

  
    files
     .pipe(concat('ss-form.min.js'))
     .pipe(uglify())
     .pipe(gulp.dest('./dist'));

  stream.on('end', function() {
    if(connect) {
      connect.reload();
    }
  });
});


gulp.task('watch', function () {
  gulp.watch(['./demo/*.html'], ['html']);
  gulp.watch(['./demo/*.js'], ['demo-js']);
  gulp.watch(['./src/*.js'], ['src-js']);
});


gulp.task('default', ['src-js', 'connect', 'watch']);

