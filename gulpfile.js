var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uncss = require('gulp-uncss');

gulp.task('js', function(){

    return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js',
                     './node_modules/jquery/dist/jquery.min.js',
    ])
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('css', function(){

    return gulp.src(['./style/style-mare-alta.css',
                     './style/mobile-mare-alta.css',
                     './node_modules/bootstrap/dist/css/bootstrap.css',
    ])
    .pipe(concat('marealta.min.css'))
    .pipe(cssmin({html: ['teste.html ']}))
    .pipe(gulp.dest('./assets/css'));
});