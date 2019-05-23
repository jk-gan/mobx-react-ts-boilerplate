const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  plugins: [new CheckerPlugin(), new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(png|svg|jpeg|jpg|ico|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url-loader?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=5000&mimetype=application/octet-stream',
      },
    ],
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
};
