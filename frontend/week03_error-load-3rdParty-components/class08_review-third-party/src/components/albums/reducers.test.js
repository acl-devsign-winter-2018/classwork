import { albums, ALBUMS_LOAD, ALBUM_ADD } from './reducers';

describe('albums reducer', () => {

  it('initial state', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  it('load albums', () => {
    const payload = [1, 2, 3];
    const state = albums([], { type: ALBUMS_LOAD, payload });
    expect(state).toEqual(payload);
  });

  it('adds album', () => {
    const album = {};
    const state = albums([], { type: ALBUM_ADD, payload: album });
    expect(state).toEqual([album]);
  });

});