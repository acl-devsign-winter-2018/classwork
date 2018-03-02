import { NOTE_ADD, NOTE_LOAD, NOTE_UPDATE, NOTE_REMOVE } from './reducers';
import notesApi from '../../services/notesApi';

export function loadNotes() {
  return dispatch => {
    return notesApi.load()
      .then(notes => {
        dispatch({
          type: NOTE_LOAD,
          payload: notes
        });
      });
  };
}

export function addNote(note) {
  return (dispatch) => {
    return notesApi.add(note)
      .then(savedNote => {
        const action = {
          type: NOTE_ADD,
          payload: savedNote
        };

        dispatch(action);
      });
  };
}

// could be rewritten:
// export const addNote = note => dispatch => notesApi.add(note)
// .then(savedNote => dispatch({
//     type: NOTE_ADD,
//     payload: savedNote
// }));

export function updateNote(note) {
  return dispatch => {
    return notesApi.update(note)
      .then(updatedNote => {
        dispatch({
          type: NOTE_UPDATE,
          payload: updatedNote
        });
      });
  };
}

export function removeNote(id) {
  return dispatch => {
    return notesApi.remove(id)
      .then(() => {
        dispatch({
          type: NOTE_REMOVE,
          payload: id
        });
      });
  };
}