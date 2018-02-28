/* eslint no-console: "off" */

const { createStore } = require('redux');

function counter(state = 0, action) {
  console.log('received action', action.type);
  if(action.type === 'INCREMENT') return state + 1;
  else if(action.type === 'DECREMENT') return state - 1;
  return state;
}

const store = createStore(counter);

// register an event handler to redux store "change" event
store.subscribe(() => {
  console.log('store state:', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });