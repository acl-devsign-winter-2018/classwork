const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/forms-matter.html`, filename: `froms-matter.html` }),
    new CopyWebpackPlugin([
      // in output use images folder
      {from: 'src/images', to: 'images'}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
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
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};