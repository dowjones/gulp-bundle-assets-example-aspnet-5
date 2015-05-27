/// <binding Clean='clean' />

var gulp = require('gulp-help')(require('gulp')),
  gbundle = require('gulp-bundle-assets'),
  gutil = require('gulp-util'),
  del = require('del'),
  project = require('./project.json');

gulp.task('clean', 'Clean all assets out of /webroot', function (cb) {
    del([project.webroot + '/*'], cb);
});

gulp.task('watch', 'Watch assets and build on change', function (cb) {
    var livereload = require('gulp-livereload');
    livereload.listen();
    gbundle.watch({
        configPath: path.join(__dirname, 'bundle.config.js'),
        results: {
            dest: __dirname
        },
        dest: path.join(__dirname, project.webroot)
    });
    gulp.watch(project.webroot + '/**/*.*').on('change', function (file) {
        livereload(file);
        var d = new Date();
        console.log(gutil.colors.bgBlue('browser livereload at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()));
    });
    cb();
});


function bundle() {
    return gulp.src('./bundle.config.js')
      .pipe(gbundle())
      .pipe(gbundle.results({
          dest: './'
      }))
      .pipe(gulp.dest(project.webroot));
}

gulp.task('bundle', 'Builds all static files', function () {
    return bundle();
});

gulp.task('build', 'Cleans and builds all static files', ['clean'], function () {
    return bundle();
});