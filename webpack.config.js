const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './client/src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.mjs']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      include: path.join(__dirname, 'client/src'),
      options: {
        presets: [
          ['@babel/preset-env', {
            'targets': {
              'browsers': ['last 2 versions', 'safari >= 7']
            }
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-optional-chaining',
          'react-hot-loader/babel'
        ]
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: "css-loader",
        options: { importLoaders: 1 }
      }, {
        loader: "postcss-loader",
        options: {
          plugins: loader => [
            require('postcss-cssnext')()
          ]
      }}]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
