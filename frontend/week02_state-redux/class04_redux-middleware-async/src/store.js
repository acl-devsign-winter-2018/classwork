import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { notes } from './components/notes/reducers';
import { commentsByNote } from './components/comments/reducers';

const reducer = combineReducers({
  notes,
  commentsByNote
});

// const logger = store => next => action => {
//   console.log('ACTION!!!!', action.type);
//   if(action.type === 'COMMENT_ADD') {
//     action.payload.text += 'haha!';
//   }
//   return next(action);
// };

// const logger = function(store) {
//   console.log('first layer called with', store);
//   return function(next) { 
//     console.log('second layer called with', next);
//     return function(action) {
//       console.log('ACTION!!!!', action.type);
//       if(action.type === 'COMMENT_ADD') {
//         action.payload.text += 'haha!';
//       }
//       return next(action);
//     };

//   };

// };

const asyncatanor = store => next => action => {
  if(typeof action === 'function') {
    action(store.dispatch, store.getState);
  }
  else {
    return next(action);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      logger
    ) 
  )
);

export default store;