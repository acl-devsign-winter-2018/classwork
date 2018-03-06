import { addNote, doLoadNotes, removeNote, updateNote } from './actions';
import { NOTE_ADD, NOTE_LOAD, NOTE_REMOVE, NOTE_UPDATE } from './reducers';

it.skip('loads notes', () => {
  const { type, payload } = doLoadNotes({
    load() { return 'mock result'; }
  })();

  expect(type).toBe(NOTE_LOAD);
  expect(payload).toEqual('mock result');

});

it.skip('creates an add action', () => {
  const { type, payload } = addNote({ text: 'the note' });
  expect(type).toBe(NOTE_ADD);
  const { text, id, timestamp } = payload;
  expect(text).toBe('the note');
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it.skip('creates an update action', () => {
  const action = updateNote({ id: 123, text: 'updated' });
  expect(action).toEqual({
    type: NOTE_UPDATE,
    payload: {
      id: 123,
      text: 'updated'
    }
  });
});

it.skip('create a remove action', () => {
  const action = removeNote(123);
  expect(action).toEqual({
    type: NOTE_REMOVE,
    payload: 123
  });
});