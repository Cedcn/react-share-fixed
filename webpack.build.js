const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');

config.output.path = path.join(__dirname, 'build');
config.output.libraryTarget = 'umd';
config.externals = {
  react: {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs: 'react-dom',
    commonjs2: 'react-dom',
    amd: 'react-dom'
  }
};

config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]);

module.exports = config;
