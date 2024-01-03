const gulp = require('gulp');
const webserver = require('gulp-webserver');
const { watch }  = gulp;

function monitorarArquivos(cb){
    watch('src/**/*.html', gulp.series('appHTML'))

    return cb();
}

function servidor(cb){
    return gulp.src('build')
            .pipe(webserver({
                port: 8080,
                open: true,
                livereload: true
            }))
}

module.exports = { monitorarArquivos, servidor };