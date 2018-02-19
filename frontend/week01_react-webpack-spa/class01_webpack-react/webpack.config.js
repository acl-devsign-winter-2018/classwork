/* eslint-env node */
const path = `${__dirname}/build`;

module.exports = {
  entry: './src/index.js',
  output: {
    path,
    filename: 'bundle.[hash].js',
  },
  devtool: 'inline-source-map',
  plugins: [
    
  ],
  module: {
    rules: [
      
    ]
  }
};