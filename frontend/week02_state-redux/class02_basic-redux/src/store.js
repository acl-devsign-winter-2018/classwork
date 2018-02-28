import { createStore } from 'redux';
import { notes } from './components/notes/reducers';

const store = createStore(
  notes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;