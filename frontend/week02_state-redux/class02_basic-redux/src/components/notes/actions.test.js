import { addNote, updateNote, removeNote } from './actions';
import { NOTE_ADD, NOTE_UPDATE, NOTE_REMOVE } from './reducers';

it('creates an add action', () => {
  const { type, payload } = addNote({ text: 'the note' });
  expect(type).toBe(NOTE_ADD);
  const { text, id, timestamp } = payload;
  expect(text).toBe('the note');
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('creates an update action', () => {
  const action = updateNote({ id: 123, text: 'updated' });
  expect(action).toEqual({
    type: NOTE_UPDATE,
    payload: {
      id: 123,
      text: 'updated'
    }
  });
});

it('create a remove action', () => {
  const action = removeNote(123);
  expect(action).toEqual({
    type: NOTE_REMOVE,
    payload: 123
  });
});