
## Redux

Idiomatic setup in a react app:

1. `store.js`
    - `import { createStore, combineReducers, composeEnhancers, applyMiddleware } from 'redux';`
    - import your reducers from `./components/<feature>/reducers`
    - combine reducers
    - call createStore:
        - pass in "combined" root reducer
        - use composeEnhancers and applyMiddleware to include all needed middleware plus
        make REDUX_DEV_TOOLS work
        - middleware:
            - `thunk` 
                - you need access to `getStore`
                - you need to make multiple calls to dispatch
                - (async, if not fitting into promiseMiddleware)
            = `promiseMiddleware`
                - you want async action creators to be simple and just pass
                a Promise as the payload
    - export the store
1. `index.js`
    - `import { Provider } from 'react-redux';`
    - `import store from './store';`
    - Wrap you `App` component in a provider passing in the store:
    ```js
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
    ```
1. Create `reducers` by features in the various component folders
    - export named function per data that needs to be in the store
1. Create `actionCreators` by features
    - return an object of format:
    ```js
    {
        type: ACTION_NAME,
        payload <optional data need to process action>
    }
    ```
    - with promiseMiddleware:
        - can return a promise as a payload
        - middleware will wait for promise to resolve,
        - and will dispatch action with same type, but resolved payload
    - with thunk middleware
        - return a function
        - middleware will call function back with `(dispatch, getState)`

1. Use `connect` from `react-redux` to:
    - inject parts of the store state as props into component
        - `mapStateToProps`
            - signature is:
            ```js
            (state, props) => {
                // you can also "calculate" data from combo of state and props
                // return object of props to inject
            }
            // state === redux store state
            // props === props passed from parent component
            ```
        - `mapDispatchToProps`
            - signature is:
            ```js
            (dispatch) => {
                // return object of props (which are functions) to inject
            }
            ```
            - BUT, leverage bindActionCreators built in by passing object:
            ```js
            { actionCreator1, actionsCreator2 }
            ```
        - (Sometimes, if above isn't enough) `mergeProps` (see docs)
    - pass `null` when you don't need one of the functions
    - Overall format:
    ```js
    export default connect(
        <map-state-to-props>,
        <map-dispatch-to-props>
    )(ComponentBeingConnected);
    ```


            
