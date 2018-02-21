


## Testing

Primary tools:

1. `jest` - test runner and assertion library
1. `enzyme` - utility for working with components in tests

### `jest`

OSS from facebook. Instructions:

```sh
> npm i jest jest-css-modules -D`
```

In `package.json` add the following scripts:

```json
  "scripts": {
    
    "test": "jest",
    "test:watch": "npm run test -- --watch",
  },
```

NOTE: In a non-git project, you would need to use `--watchAll` as `--watch` uses
git status

### `enzyme`

Enzyme is an OSS from airbnb used to help test React components.

Installing and configuring `enzyme` takes a bit of setup:

1. Install:
    ```sh
    > npm i enzyme enzyme-to-json enzyme-adapter-react-16 -D
    ```
1. Configure. In order to configure `enzyme` to use the `react 16` adapter,
we need to configure jest to run a setup file that in turn registers the 
adapter:
    1. Add a `jest.config.js` file at the root of your project:
        ```js
        /* eslint-env node */
        module.exports = {
            setupTestFrameworkScriptFile: '<rootDir>/enzyme.setup.js',
            transform: {
                '.*': '<rootDir>/node_modules/jest-css-modules'
            }
        };
        ```
    2. Add a `enzyme.setup.js` file at the root of your project:
        ```js
        import Enzyme from 'enzyme';
        import Adapter from 'enzyme-adapter-react-16'`;

        Enzyme.configure({ adapter: new Adapter() });`
        ```
        
## React Router

### Install

```sh
> npm i react-router-dom
```

### Config

Add fallback in `webpack.config.js` to webpack dev server so `index.html` gets served:

```js
devServer: {
    contentBase: './${buildDir}',
    historyApiFallback: true,
},
```

### Understanding Client Side Routing
* What is typically handled by server
* Traditional hash based browser routing
* pushState and "modern" client routing
* Gotcha when request goes to the server

### Key to using React Router

The key to using React Router is knowing it has two parts:
1. The `url` of the browser window is state.
1. The routes (`Route`, `Switch`) dynamically show or hide content (Components)
based on the current `state` of the url. They can optionally pass `match`, `location`, and `history`
1. The `Link` component is a wrapped anchor tag that changes the url. It is the
user action (can also be done programmatically). Two things you *must* remember:
    * The `Link` component does not show or hide anything. The presentation is the 
    job of the `Route` component
    * You *cannot* use bare anchor tags (`<a>`), you *must* use the `Link` (or 
    change `history.location` on the props passed via the `Route`)

### Exploring React Router
* `Router`
    * Wrapper for entire app under control of the "Router"
    * Usually `BrowserRouter`
        * Server needs to handle various paths as `index.html`
    * `HashRouter` for "static"
    * `MemoryRouter` for "testing"
* `Link`
    * Used to cause the route to change
    * Use the `to` attribute
    * Use `match` param to link dynamically
* `Route`
    * Dynamic rendering based on the "path" of the current url
    * Injects `match` prop automagically!
    * `path` matched "starts with"
        * doesn't include query part
        * use `exact` to match exact
    * Use `match` param to link dynamically
* `Switch`
    * Groups a set of Routes allowing only to match
    * Otherwise each Route evaluates independently
    * Don't need if alternatives are mutually exclusive
    * Can provide "default `Route` with no path
    * Can include `Redirect`
* `Router` rendering
    1. `component` - specify a valid `function` or `class` name
    1. `render` - supply a function
* Params
    * "Capture" parts of the url as params
    * Familiar `:id` syntax
    * Accessible via `match.params.id`
    * Always a `string`
* Multiple `Route` components can exist across app the update different
parts of the app

## Handling Parent-Child state

* Use keys in state


