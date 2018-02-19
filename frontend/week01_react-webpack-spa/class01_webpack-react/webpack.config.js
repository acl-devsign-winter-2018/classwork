/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
 
const path = `${__dirname}/build`;

module.exports = {
  entry: './src/index.js',
  output: {
    path,
    filename: 'bundle.[hash].js',
  },
  // devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(`${path}/bundle.*.js`), 
  ],
  module: {
    rules: [
      
    ]
  }
};