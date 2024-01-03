const gulp = require('gulp');
const { series } = gulp;
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function tranformacaoJs(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["@babel/env"],
        }))
        .pipe(uglify())
        .on("error", err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'));

    return cb();
}

exports.default = series(tranformacaoJs);