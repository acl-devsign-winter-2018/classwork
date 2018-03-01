import { commentsByNote } from './reducers';
import { NOTE_ADD, NOTE_REMOVE } from '../notes/reducers';
import { COMMENT_ADD, COMMENT_REMOVE } from './reducers';

it('has default state of {}', () => {
  const state = commentsByNote(undefined, {});
  expect(state).toEqual({});
});

const addNote = () => commentsByNote({}, { 
  type: NOTE_ADD, 
  payload: { id: 123 } 
});


it('adds a entry when a note is added', () => {
  const state = addNote();
  expect(state).toEqual({ 123: [] });
});

it('removes comments when a note is removed', () => {
  const state = commentsByNote({ 123: [] }, { 
    type: NOTE_REMOVE,
    payload: 123
  });
  expect(state).toEqual({});
});

it('adds and removes a comment from a note', () => {
  const prevState = addNote();
  const comment = {
    id: 456,
    noteId: 123,
    text: 'What a great note'
  };

  const addedState = commentsByNote(prevState, {
    type: COMMENT_ADD,
    payload: comment
  });

  expect(addedState).toEqual({
    123: [comment]
  });

  const removedState = commentsByNote(addedState, {
    type: COMMENT_REMOVE,
    payload: {
      id: 456,
      noteId: 123
    }
  });

  expect(removedState).toEqual({
    123: []
  });

});