/* eslint-disable */
const path = require('path'); // es una libreria de node nativa.
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// require es una palabra reservada de commonJs y vale para importar librerias

// const isProduction = process.env.PORT === 'production';

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: path.join(__dirname, 'webpack-basic', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'webpack-basic', 'build'),
    // filename: 'bundle.js'
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
      template: path.join(__dirname, 'webpack-basic', 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    }),
    new BundleAnalyzerPlugin()
  ]
};
