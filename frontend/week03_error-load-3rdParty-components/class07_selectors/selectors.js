const { createSelector } = require('reselect');

const filterSelector = state => state.filter;
const notesSelector = state => state.notes;

const filteredNotesSelector = createSelector(
  [filterSelector, notesSelector],
  (filter, notes) => {
    console.log('running the selector');
    return notes.filter(note => note === filter);
  }
);

let exampleState = {
  filter: 'note1',
  notes: ['note1', 'note2']
};

console.log(filteredNotesSelector(exampleState));
console.log(filteredNotesSelector(exampleState));
exampleState = {
  ...exampleState,
  filter: 'note1'
};
console.log(filteredNotesSelector(exampleState));