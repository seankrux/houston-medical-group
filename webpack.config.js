const path = require('path');
const defaults = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaults,
  entry: {
    'dashboard': './src/Dashboard/index.js'
  },
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@wordpress/element': 'wp.element'
  },
};