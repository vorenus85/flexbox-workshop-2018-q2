var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// static variables
var srcScss = 'introduction/scss/style.scss';
var distCss = 'introduction/';
var minCss = 'style.min.css';

gulp.task('sass', function(){
    console.log('starting sass task');
    return gulp.src(srcScss)
    .pipe(plumber(function (err){
        console.log('Sass task error');
        console.log(err);
        this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass({
        outputStyle: 'compressed'
    })) // Converts Sass to Css with gulp sass
    .pipe(concat(minCss))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(distCss))
    .pipe(browserSync.stream());
});

// browserSync
gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: {
            baseDir: 'introduction/'
        }
    });
    
    gulp.watch("introduction/scss/*.scss", ['sass']);
    gulp.watch("introduction/index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);