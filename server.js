const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

const PORT = 3050;

app.listen(PORT, () => {
  console.log('App listening on port', PORT);
});
