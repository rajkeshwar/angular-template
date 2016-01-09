
var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');

var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var concatCss   = require('gulp-concat-css');

var bowerFiles = require('./gulp/bower-files.js');

gulp.task('libs', function(){
	var jsFilter = gulpFilter(['*.js', '**/*.js'], { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles(bowerFiles.overrides))
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(gulp.dest('./shared-jslibs'));
});

gulp.task('clean:libs', function () {
	return gulp.src(['shared-jslibs'], {read: false})
		.pipe(clean({force: true}))
		.pipe(clean());
});

gulp.task('clean:angular', function () {
	return gulp.src(['angular'], {read: false})
		.pipe(clean({force: true}))
		.pipe(clean());
});

// Static Server + watching less/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/css/less/*.less", ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src("src/css/less/app.less")
        .pipe(less())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
});

//gulp.task('default', ['serve']);