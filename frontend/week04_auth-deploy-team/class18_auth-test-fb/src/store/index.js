import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { rooms } from '../components/rooms/reducers';
import { user } from '../components/app/reducers';

const reducer = combineReducers({
  rooms,
  user
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

window.onbeforeunload = () => {
  const { games } = store.getState();
  window.localStorage.games = JSON.stringify(games);
};

export default store;