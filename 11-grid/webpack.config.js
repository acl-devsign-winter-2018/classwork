/* eslint-env node */
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
  ],
  module: {
    rules: [
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            attrs: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { 
              importLoaders: 1, 
              sourceMap: true 
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }

          }
        ]
      }
    ]
  }
};