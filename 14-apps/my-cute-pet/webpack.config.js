/* eslint-env node */
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // our starting point for our javascript
  // (everything is tracked by being "required" (or "imported"))
  entry: './src/main.js',
  // What do we want to call the output, and where do we want to put it?
  output: {
    filename: 'bundle.js',
    // This path is for npm run build, 
    // npm start (webpackdevserver) runs in a temp folder
    path: `${__dirname}/build`,
  },
  // gives us source maps (we debug code we wrote, not what ended up
  // getting "built")
  devtool: 'inline-source-map',
  // These add high-level functionality to webpack
  plugins: [
    // cleans the build directory on each build
    // new CleanWebpackPlugin(`${__dirname}/build`),
    // create an index.html based on our template,
    // will add in <script> to bundle.js
    new HtmlPlugin({ template: './src/index.html' }),
  ],
  module: {
    // "loaders" tell webpack how to require (or import) things
    rules: [
      {
        test: /.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          // dynamically puts the css into style tag of document head
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          // turns css into js that exports a string that is css
          {
            loader: 'css-loader',
            options: { 
              importLoaders: 1, 
              sourceMap: true 
            }
          },
          // allows us to write nested css and auto-prefix 
          // css props that need to be browser specific
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }

          }
        ]
      },
      // load images!
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          // default is to inline the image content
          // via base64 encoding.
          // If file is bigger than this limit,
          // create a "real" file
          options: {
            limit: 5000,
          },
        },
      }
    ]
  }
};