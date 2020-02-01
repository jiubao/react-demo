'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
// process.env.BABEL_ENV = 'development';
// process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const config = require('../config/webpack.config');

function build() {
  console.log('before [webpack(config)]');
  const compiler = webpack(config);
  console.log('after [webpack(config)]');

  return new Promise((resolve, reject) => {
    console.log('Creating production build...');
    compiler.run((err, stats) => {
      resolve(stats);
      console.log('err: ', err);
      console.log('stats: ', stats.compilation.errors);
    });
  });
}

build();