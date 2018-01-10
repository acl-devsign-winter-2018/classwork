# Webpack Setup, class 1

1) `npm init` 
   (creates package.json)

2) `npm i autoprefixer copy-webpack-plugin css-loader extract-loader file-loader html-loader html-webpack-plugin htmlhint postcss-loader precss style-loader webpack webpack-dev-server`
   
   see docs:

   * [autoprefixer](https://npmjs.com/package/autoprefixer)
   * [copy-webpack-plugin](https://npmjs.com/package/copy-webpack-plugin)
   * [css-loader](https://npmjs.com/package/css-loader)
   * [extract-loader](https://npmjs.com/package/extract-loader)
   * [file-loader](https://npmjs.com/package/file-loader)
   * [html-loader](https://npmjs.com/package/html-loader)
   * [html-webpack-plugin](https://npmjs.com/package/html-webpack-plugin)
   * [html-hint](https://npmjs.com/package/html-hint)
   * [postcss-loader](https://npmjs.com/package/postcss-loader)
   * [precss](https://npmjs.com/package/precss)
   * [style-loader](https://npmjs.com/package/style-loader)
   * [webpack](https://npmjs.com/package/webpack)
   * [webpack-dev-server](https://npmjs.com/package/webpack-dev-server)


3) create a *src* directory including the files **index.html** and **main.js**. Add the following to **main.js** to include your CSS:

```
import './css/reset.css';
import './css/main.css';
```

4) inside your *src* directory, create two new files: *reset.css* and *main.css*. I've been using the [MeyerWeb CSS Reset](https://meyerweb.com/eric/tools/css/reset/), with thoughtful modifications.

5) create a file at the root called **webpack.config.js**

```
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
    new HtmlPlugin({ template: `./src/second-page.html`, filename: `second-page.html` }),
    new HtmlPlugin({ template: `./src/third-page.html`, filename: `third-page.html` }),
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
```

...the **CopyWebpackPlugin** is necessary only if you're using local images, the duplicate **new HTMLPlugin** lines if you have multiple HTML pages.

6) edit the scripts section of **package.json**
```
"scripts": {
    "htmlhint": "htmlhint --config .htmlhintrc **/*.html",
    "pretest": "npm run htmlhint",
    "test": "echo \"Error: no test specified\" && exit 0",
    "start": "webpack-dev-server",
    "build": "webpack"
  },
```