const path = require('path');

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-chrome-launcher'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['sinon', 'mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'client/test/index.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.(js|jsx)$/,
          use: [{
            loader: 'istanbul-instrumenter-loader'
          }, {
            loader: 'babel-loader',
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
          }],
          include: [
            path.join(__dirname, 'client/src'),
            path.join(__dirname, 'client/test')
          ],
          exclude: [
            path.join(__dirname, 'client/src/styles')
          ]
        }]
      }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/test/index.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage-istanbul'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: true,
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    coverageIstanbulReporter: {
      reports: ['text-summary', 'html'],
      dir: path.join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      'report-config': { subdir: 'html' }
    }
  })
}
