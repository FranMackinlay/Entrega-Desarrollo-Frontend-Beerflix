const path = require('path'); // es una libreria de node nativa.
// require es una palabra reservada de commonJs y vale para importar librerias

module.exports = {
  entry: path.join(__dirname, 'webpack-basic', 'index.js'),
  output: {
    path: path.join(__dirname, 'webpack-basic', 'build'),
    filename: 'bundle.js'
  }
};
