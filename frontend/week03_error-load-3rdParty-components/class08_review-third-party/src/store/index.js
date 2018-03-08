import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { loading, error } from '../components/app/reducers';
import { albums, album, albumsById, recentAlbums } from '../components/albums/reducers';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  albums,
  album,
  albumsById,
  recentAlbums,
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