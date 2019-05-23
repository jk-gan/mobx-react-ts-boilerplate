const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    entry: './src/index.tsx',
  },
  output: {
    filename: '[name].bundle.[contenthash].js',
    publicPath: '/public/',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        utilities: {
          test: /[\\/]src[\\/]utilities[\\/]/,
          minSize: 0,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebook/create-react-app/issues/2488
          ascii_only: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Admin Portal',
      template: './src/index.ejs',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    }),
  ],
});
