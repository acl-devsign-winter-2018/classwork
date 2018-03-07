export const NOTE_ADD = 'NOTE_ADD';
export const NOTE_REMOVE = 'NOTE_REMOVE';
export const NOTE_UPDATE = 'NOTE_UPDATE';
export const NOTE_LOAD = 'NOTE_LOAD';
export const APPLY_FILTER = 'APPLY_FILTER';
import { createSelector } from 'reselect';

const filterSelector = state => state.filter;
const notesSelector = state => state.notes;

export const filteredNotesSelector = createSelector(
  [filterSelector, notesSelector],
  (filter, notes) => {
    if(!filter) return notes;
    return notes.filter(note => note.text.includes(filter));
  }
);

export function filter(state = '', { type, payload }) {
  switch(type) {
    case APPLY_FILTER: 
      return payload;
    case NOTE_LOAD:
      return '';
    default:
      return state;
  }
}

export function notes(state = [], { type, payload }) {
  switch(type) {
    case NOTE_LOAD:
      return payload;
    case NOTE_ADD:
      return [
        ...state,
        payload
      ];
    case NOTE_REMOVE:
      return state.filter(n => n.id !== payload);
    case NOTE_UPDATE: {
      const index = state.findIndex(n => n.id === payload.id);
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}
