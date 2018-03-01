import { NOTE_ADD, NOTE_UPDATE, NOTE_REMOVE } from './reducers';
import shortid from 'shortid';

import store from '../../store';

export function addNote(note) {

  return (dispatch) => {
    // server should do these:
    // note.id = shortid();
    // note.timestamp = new Date();
    
    // call the server with POST /api/note
    return notesApi.add(note)
      .then(savedNote => {

        const action = {
          type: NOTE_ADD,
          payload: savedNote
        };

        //dispatch action here!
        dispatch(action);
      });
    

  };
}

export function updateNote(note) {
  return {
    type: NOTE_UPDATE,
    payload: note
  };
}

export function removeNote(id) {
  return {
    type: NOTE_REMOVE,
    payload: id
  };
}