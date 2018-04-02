const express = require('express');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const PORT = 3001;
const html = fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf8' });

// Start json-server in child process.
spawn(
  path.resolve(__dirname, '../node_modules/json-server/bin/index.js'),
  ['--watch', './server/db.json'],
  { stdio: 'inherit', shell: true }
);

// Create and start the Express app.
const app = express();

const compiler = webpack({
  ...webpackConfig,
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development'
});

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.get('*', (req, res) => {
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
