var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  '@faker-js/faker',
  'lodash',
  'react',
  'react-dom',
  'react-input-range',
  'react-redux',
  'react-router',
  'redux',
  'redux-form',
  'redux-thunk',
];

module.exports = (env, argv) => {
  const mode = env.WEBPACK_SERVE ? 'development' : 'production';

  return {
    entry: {
      bundle: './src/index.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
    },
    mode,
    optimization: {
      splitChunks: {
        chunks: 'all',
        // minSize: 20000,
        // minRemainingSize: 0,
        // minChunks: 1,
        // maxAsyncRequests: 30,
        // maxInitialRequests: 30,
        // enforceSizeThreshold: 50000,
        // cacheGroups: {
        //   defaultVendors: {
        //     test: /[\\/]node_modules[\\/]/,
        //     priority: -10,
        //     reuseExistingChunk: true,
        //   },
        //   default: {
        //     minChunks: 2,
        //     priority: -20,
        //     reuseExistingChunk: true,
        //   },
        // },
      },
      runtimeChunk: { name: 'manifest' },
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/,
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: './src/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ],
  };
};
