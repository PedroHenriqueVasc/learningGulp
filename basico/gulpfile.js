const gulp = require('gulp');
const {series, parallel} = gulp;

const before1 = cb => {
    console.log('Antes 1...');
    return cb();
}

const before2 = cb => {
    console.log('Antes 2...');
    return cb();
}

function copy(cb){
    // Copia os arquivos de forma individual
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //     .pipe(gulp.dest('pastaB'));

    // Copia todos os arquivos de determinado diretório
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'));
    return cb();
}

const fim = cb => {
    console.log('Fim...');
    return cb();
}

module.exports.default = series(
    parallel(before1, before2),
    copy,
    fim
)