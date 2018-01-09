# Webpack Setup, class 1

1 `npm init` 
   (creates package.json)

2 `npm i webpack webpack-dev-server html-loader html-webpack-plugin htmlhint copy-webpack-plugin`
   (install packages)

3 create a *src* directory including the files **index.html** and **main.js**

4 create a file at the root called **webpack.config.js**

```
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
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
        },
      }     
    ]
  }
};
```

5 edit the scripts section of **package.json**
```
"scripts": {
    "htmlhint": "htmlhint --config .htmlhintrc **/*.html",
    "pretest": "npm run htmlhint",
    "test": "echo \"Error: no test specified\" && exit 0",
    "start": "webpack-dev-server",
    "build": "webpack"
  },
```