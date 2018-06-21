var gulp = require('gulp');
var sass = require('gulp-sass');
var util = require('gulp-util');
var argv = require('yargs');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// static variables
var srcScss = 'introduction/scss/style.scss';
var distCss = 'introduction/';
var minCss = 'style.min.css';

const example = util.env.exampleFolder;

gulp.task('sass-intro', function(){
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

gulp.task('sass', function(){
    console.log('starting sass task');
    return gulp.src( example+'/start/style.scss')
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
    .pipe(gulp.dest( example + '/start/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: {
            baseDir: example+'/start/'
        }
    });
    
    gulp.watch( example + "/start/*.scss", ['sass']);
    gulp.watch( example + "/start/index.html").on('change', browserSync.reload);
});

// browserSync
gulp.task('serve-intro', ['sass-intro'], function() {
    
    browserSync.init({
        server: {
            baseDir: 'introduction/'
        }
    });
    
    gulp.watch("introduction/scss/*.scss", ['sass-intro']);
    gulp.watch("introduction/index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve-intro']);

/**
 *  gulp watch-example --exampleFolder [exampleFolder]
 * */
gulp.task('watch-example', ['serve']);