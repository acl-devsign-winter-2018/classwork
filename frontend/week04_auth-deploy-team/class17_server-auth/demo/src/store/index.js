import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { loading, error } from '../components/app/reducers';
import { selections, winner, games, matches, lastMatch } from '../components/games/reducers';

const reducer = combineReducers({
  loading,
  error,
  selections,
  winner,
  games,
  matches,
  lastMatch
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