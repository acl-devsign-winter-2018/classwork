Webpack From Scatch
===

## Webpack Terminology

### Loaders

Loaders are involved on `import`/`require`

### Plugins

Plugins do additional work outside of tree. Some plugins are used in 
conjunction with loaders (`Extract Text`)

## Setup

### `package.json`

1. `npm init` to create `package.json`

### Basic Build Setup

1. `npm i webpack -D`
1. Create `webpack.config.js` (see example)
1. Specify:
    * entry module
    * destination
1. Run `npx webpack` to create bundle.js
1. Success? Add to `package.json` as `build`

### Add Clean Webpack Plugin

Remove old bundle files by cleaning them when build
1. `npm i clean-webpack-plugin -D`
1. Add to `plugins` section of `webpack.config.js`
    ```js
    plugins: [
        new CleanWebpackPlugin(`${path}/bundle.*.js`), 
    ],
    ```

### Dev Server

**NOTE: You will need to restart webpack _whenever_ config changes!!!**

1. `npm i webpack-dev-server -D`
1. Add "build" as `devServer/contentBase` to `webpack.config.js`:
    ```js
    devServer: {
        contentBase: './build',
    },
    ```
1. Run `npx webpack-dev-server`
1. Success? Add to `package.json` as `start`
1. Commit

### Add an `index.html`

1. `npm i html-webpack-plugin -D`
1. Add `HTMLPLugin` to `webpack.config.js`
1. Restart via `npm start`
1. Notice what happens when you change `add.js`
1. Commit

### Add sourcemaps FTW!

```js
devtool: 'inline-source-map',
```

### Add `babel` for ESNext

1. `npm i babel-core babel-loader babel-preset-env -D`
1. Add `.babelrc` with preset for last two browser versions, or chrome 60, etc.
1. (Optional for today: add additional object spread and class properties plugins)
1. Add `rule` to `webpack.config.js` for loading `.js` with babel
1. Try `npm start`
1. Restart and verify that it works!
1. Commit

### Add React

1. `npm i react react-dom`
1. `npm i babel-preset-react -D`
1. Add `'react'` to `.babelrc` presets
1. Change code to render some react jsx to `document.body`
1. Restart and verify that it works!

### Change `eslint` to better work with `react` and `babel`

1. `npm i babel-eslint eslint-plugin-babel eslint-plugin-react -D`
1. Refer to class example for setup of `.eslintrc`. Main changes:
    1. Extend react plugin:

        ```json
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
        ]
        ```
    2. Use `babel` parser and plugin, change `parserOptions` and `env`:

        ```json
        "parser": "babel-eslint",
        "parserOptions": {
            "ecmaVersion": 8,
            "sourceType": "module",
            "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "module": true,
            "jsx": true
            }
        },
        "env": {
            "es6": true,
            "browser": true
        },
        "plugins": [
            "babel"
        ],
        ```
    3. Add babel-specific rules:
        ```json
         "rules": {
            //...
            "babel/object-curly-spacing": ["error", "always"],
            "babel/no-invalid-this": 1,
            "babel/semi": 1
        }
        ```

### Use a template for `index.html`

1. Add `index.html` to `src` that has an `id="root"` target element
1. Change config of `HTMLPlugin` to use that file
1. Change `ReactDOM.render` to target the new element
1. Restart and verify that it works!

### Add `css` with style loader

1. `npm i css-loader style-loader postcss-loader autoprefixer precss -D`
1. Add `postcss.config.js` with autoprefixer and precess:
    ```js
    /* eslint-env node */
    module.exports = {
        plugins: [
            require('precss'),
            require('autoprefixer')
        ]
    };
    ```
1. Add a loader to rules
1. Add a css file
1. Restart and verify it works!

### Extract css to own file

1. `npm un style-loader -D`
1. `npm i extract-text-webpack-plugin -D`
1. Add Extract Text to `plugins` and change loader rule
1. Restart and verify it works!

### scss and local modules FTW!

1. `npm i sass-loader node-sass -D`
1. Change css loader rule
1. Change `.css` file to `.scss`, add some nested css or variables
1. Change import correct file extension
1. Restart and verify it works!
1. Try adding a `:local` and using the import in your component


