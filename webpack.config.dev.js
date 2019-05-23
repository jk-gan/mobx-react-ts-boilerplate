const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // contentBase: path.join(__dirname, 'src'),
    // publicPath: '/',
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Cooper Vision Admin Portal',
      template: './src/index.ejs',
      alwaysWriteToDisk: true,
    }),
    // new HtmlWebpackHarddiskPlugin({
    //   outputPath: path.resolve(__dirname, 'src'),
    // }),
  ],
});
