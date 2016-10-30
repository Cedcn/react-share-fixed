const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: {
    example: './example/Index.jsx'
  },
  output: {
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limi1t=2500' },
      {
        test: /\.less|\.css$/,
        loader: 'style!css?modules&localIdentName=[local]__[hash:base64:10]!autoprefixer!less'
      }
    ]
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  devServer: {
    port: 8080,
    devtool: true,
    colors: true,
    progress: true
  },
  devtool: 'source-map'
};


module.exports = config;
