const path = require('path'); // es una libreria de node nativa.
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// require es una palabra reservada de commonJs y vale para importar librerias

// const isProduction = process.env.PORT === 'production';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
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
      },
      // {
      //   test: /\.(jpg|png|svg|jpeg|gif)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[path][name].[ext]'
      //   }
      // }
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 48192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'webpack-basic', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'webpack-basic'),
    overlay: true,
    hot: true,
    historyApiFallback: true
  }
};
