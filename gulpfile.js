var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uncss = require('gulp-uncss');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./style/*.css', gulp.series('css'));
    gulp.watch('./js/*.js', gulp.series('js'));
    gulp.watch("*.html").on("change", reload);
});
/*
gulp.task('browser-sync', function(){
    browserSync.init({
        proxy: 'localhost:5000'
    });

    gulp.watch('./style/*.css', gulp.series('css'));
    gulp.watch('./js/*.js', gulp.series('js'));
});
*/
gulp.task('js', function(){

    return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js',
                     './node_modules/jquery/dist/jquery.min.js',
                     './js/script.js',
    ])
    .pipe(gulp.dest('./assets/js/'))
    .pipe(browserSync.stream());
});

gulp.task('css', function(){

    return gulp.src(['./style/style-mare-alta.css',
                     './style/mobile-mare-alta.css',
                     './node_modules/bootstrap/dist/css/bootstrap.css',
    ])
    .pipe(concat('marealta.min.css'))
    .pipe(cssmin())
    .pipe(uncss({html: ['index.html ']}))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});
