var babelify = require('babelify');
var browserify = require('browserify');
var debowerify = require('debowerify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var stream = require('gulp-streamify');
var jshint = require('gulp-jshint');
var ngAnnotate = require('browserify-ngannotate');
var rm = require('gulp-rimraf');
var deamdify = require('deamdify');

function _cb(cb) {
    return cb || function () {
        };
}
function _clean(cb) {
    cb = _cb(cb);

    gulp.src('release')
        .pipe(rm()).on('finish', function () {
            cb();
        })
}
gulp.task('bundle', function () {

    _clean(function () {
        var bundler = browserify({
            entries: 'app/js/main.js',
            debug: true,
            standalone : 'crypton'
        });


        var transforms = [
            /*debowerify,*/
            ngAnnotate,
            'bulkify'
        ];
        transforms.forEach(function (transform) {
            bundler.transform(transform);
        });

        bundler
            .bundle()
            .pipe(source('main.js'))
            .pipe(stream(uglify()))
            .pipe(gulp.dest('release/js'));

        _copy_assets();
    });

});

gulp.task('dev', ['jshint', 'bundle', 'watch'], function () {
    connect.server({
        root: 'release'
    });
});

gulp.task('jshint', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('watch', function () {
    gulp.watch('app/js/**/*', ['jshint', 'bundle']);
});

gulp.task('clean', function (cb) {
    _clean(cb);
});

function _copy_assets(cb)
{
    cb = _cb(cb);
    gulp.src('app/index.html')
        .pipe(gulp.dest('release'))
        .on('finish',function()
        {
            cb();
        })
}