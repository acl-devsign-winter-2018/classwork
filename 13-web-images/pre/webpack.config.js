/* eslint-env node */
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([
      // in output use images folder
      { from: 'src/images', to: 'images' }
    ])
  ],
  module: {
    rules: [
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            // attrs: false
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
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          // options: {
          //   limit: 25000,
          // },
        },
      }
    ]
  }
};