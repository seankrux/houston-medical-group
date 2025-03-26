const path = require('path');
const defaults = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaults,
  entry: {
    'import-excel': './src/ImportExcel/index.js',
  },
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
  },
  externals: {
    '@wordpress/element': 'wp.element'
  },
};