import { createStore, combineReducers } from 'redux';
import { notes } from './components/notes/reducers';
import { commentsByNote } from './components/comments/reducers';

const reducer = combineReducers({
  notes,
  commentsByNote
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;