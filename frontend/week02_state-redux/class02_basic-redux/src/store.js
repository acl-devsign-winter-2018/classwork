import { createStore } from 'redux';
import { notes } from './components/notes/reducers';

const store = createStore(notes);

export default store;