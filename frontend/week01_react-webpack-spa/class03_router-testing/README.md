


## Testing

Primary tools:

1. `jest` - test runner and assertion library
1. 'enzyme` - utility for working with components in tests

### `jest`

OSS from facebook. Instructions:

```sh
> npm i jest -D`
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

### `enzyme``

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
        setupTestFrameworkScriptFile: `${__dirname}/enzyme.setup.js`
        };
        ```
    2. Add a `enzyme.setup.js` file at the root of your project:
        ```js
        import Enzyme from 'enzyme';
        import Adapter from 'enzyme-adapter-react-16'`;

        Enzyme.configure({ adapter: new Adapter() });`
        ```
        

