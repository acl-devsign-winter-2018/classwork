import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { selections, winner, games } from '../components/app/reducers';

const reducer = combineReducers({
  selections,
  winner,
  games
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