import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { loading, error } from '../components/app/reducers';
import { albums } from '../components/albums/reducers';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  albums,
  loading,
  error
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    ) 
  )
);

export default store;