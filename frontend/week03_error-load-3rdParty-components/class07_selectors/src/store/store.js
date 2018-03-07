import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { notes, filter } from '../components/notes/reducers';
import { commentsByNote } from '../components/comments/reducers';
import { loading, error } from '../components/app/reducers';
import { users } from '../components/users/reducers';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  notes,
  filter,
  commentsByNote,
  loading,
  error,
  users
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

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