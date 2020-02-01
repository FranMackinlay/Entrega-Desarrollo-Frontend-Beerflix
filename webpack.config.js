const path = require('path'); // es una libreria de node nativa.
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// require es una palabra reservada de commonJs y vale para importar librerias

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'webpack-basic', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'webpack-basic', 'build'),
    // filename: 'bundle.js'
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'webpack-basic', 'index.html')
    })
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'webpack-basic')
  }
};
