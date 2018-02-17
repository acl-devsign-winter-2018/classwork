/* eslint-env node */
require('dotenv').config();
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const buildDir = `${__dirname}/build`;

module.exports = {
  // our starting point for our javascript
  // (everything is tracked by being "required" (or "imported"))
  entry: './src/index.js',
  // What do we want to call the output, and where do we want to put it?
  output: {
    filename: 'bundle.[hash].js',
    // This path is for npm run build, 
    // npm start (webpack-dev-server) runs in a temp folder
    path: buildDir,
  },
  // gives us source maps (we debug code we wrote, not what ended up
  // getting "built")
  devtool: 'inline-source-map',
  // These add high-level functionality to webpack
  plugins: [
    // Clean part or all of directory before new build
    new CleanWebpackPlugin(buildDir), 

    // Pass dev environment variables into built app
    new webpack.DefinePlugin({
      'process.env.KEY_TO_ADD': JSON.stringify(process.env.KEY_TO_ADD)
    }),

    // create an index.html based on our template,
    // will add in <script> to bundle.js
    new HtmlPlugin({ template: './src/index.html' }),
  ],
  module: {
    // "rules" tell webpack how to require (or import) things ("loaders")
    rules: [
      {   
        // if the file ends in '.js' then load it with the babel loader,
        // but make sure the .js file wasn't in node_modules
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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