// Importações
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/************************************
 * PARA RODAR DIGITE "npm run gulp" *
************************************/

/* Compila todos os arquicos .scss e envia
os arquivos compilados para a parta css */
const buildStyles = () => {
  return src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('./src/css'));
}
/* Toda vez que eu modificar um arquivo .scss
ele vai executar a função de compilação */
const watchTask = () => {
  watch(['./src/scss/*.scss'], buildStyles)
}

// Exportações
exports.default = series(buildStyles, watchTask);