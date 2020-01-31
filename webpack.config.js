const path = require('path'); // es una libreria de node nativa.
// require es una palabra reservada de commonJs y vale para importar librerias

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'webpack-basic', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'webpack-basic', 'build'),
    filename: 'bundle.js'
    // filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
