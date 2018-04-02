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
  devtool: 'source-map',
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
          'react-hot-loader/babel',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-class-properties'
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
