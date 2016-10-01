var gulp = require('gulp');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var notify = require("gulp-notify");
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}


gulp.task('jsx', function () {
    
    function transpile(){
        
        return gulp.src('./src/jsx/*.jsx')
            .pipe((babel({presets: ['react','es2015']})))
            .pipe(gulp.dest('./src'));
    }
    
    return transpile();
});



gulp.task('browserify', ['jsx'], function () {
    
  /*var props = {entries: ['./src/main.js'],debug: true, extensions: ['.js','.es6']}; */
    
  var props = {entries: ['./src/ULM_Main.js'],debug: true, extensions: ['.js','.es6']};
    
  var bundler = browserify(props);
        
  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./scripts'));
  }
    
  return rebundle();

});


gulp.task('minify', ['jsx','browserify'], function(){


  var myStream = gulp.src('./scripts/main.js');

  return myStream.on('error', handleErrors)
    .pipe(uglify())
    .pipe(rename('ulm.min.js'))
    .pipe(gulp.dest('./scripts'));

});


gulp.task('default', ['jsx','browserify']);
