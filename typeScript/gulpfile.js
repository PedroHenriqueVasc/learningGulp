const gulp = require('gulp');
const { series } = gulp;
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function tranformacaoTs(){
    return tsProject.src()
            .pipe(tsProject())
            .pipe(gulp.dest('build'))
}

exports.default = series(tranformacaoTs);