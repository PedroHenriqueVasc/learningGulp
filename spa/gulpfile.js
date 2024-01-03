const gulp = require('gulp')
const { series, parallel } = gulp;

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');
const { depsCSS, depsFonts } = require('./gulpTasks/deps');
const { monitorarArquivos, servidor } = require('./gulpTasks/server');

gulp.task('appHTML', appHTML);
gulp.task('appCSS', appCSS);
gulp.task('appJS', appJS);
gulp.task('appIMG', appIMG);

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)