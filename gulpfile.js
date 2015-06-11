var babelify = require('babelify');
var browserify = require('browserify');
var debowerify = require('debowerify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var stream = require('gulp-streamify');
var jshint = require('gulp-jshint');

gulp.task('bundle', function() {

    var bundler = browserify({
       entries : 'app/main.js',
        debug : true,
        insertGlobals: true
    });

    bundler
        .transform(debowerify)
        .bundle()
        .pipe(source('main.js'))
        //.pipe(stream(uglify()))
        .pipe(gulp.dest('release/js'));
});

gulp.task('dev',['jshint','bundle','watch'],function()
{
    connect.server({
        root: 'release'
    });
});

gulp.task('jshint', function()
{
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('watch',function()
{
   gulp.watch('app/**/*', ['jshint','bundle']);
});