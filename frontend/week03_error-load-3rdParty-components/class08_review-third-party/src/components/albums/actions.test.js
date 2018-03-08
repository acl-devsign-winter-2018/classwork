jest.mock('../../services/api', () => ({ 
  getAlbums: jest.fn(() => Promise.resolve('PAYLOAD')),
  deleteAlbum: jest.fn(() => Promise.resolve('SHOULD NOT BE PAYLOAD')),
  postAlbum: jest.fn(() => Promise.resolve('PAYLOAD'))
}));

import { loadAlbums, addAlbum, removeAlbum } from './actions';
import { ALBUMS_LOAD, ALBUM_ADD, ALBUM_REMOVE } from './reducers';
import api from '../../services/api';

describe('albums reducer', () => {

  it('load albums', () => {
    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    return payload.then(result => {
      expect(result).toBe('PAYLOAD');
    });
  });

  it('adds an album', () => {
    const album = {};
    const { type, payload } = addAlbum(album);
    expect(type).toBe(ALBUM_ADD);
    expect(api.postAlbum).toBeCalledWith(album);
    return payload.then(result => {
      expect(result).toBe('PAYLOAD');
    });
  });

  it('removes an album', () => {
    const id = 'ID';
    const { type, payload } = removeAlbum(id);
    expect(type).toBe(ALBUM_REMOVE);
    return payload.then(result => {
      expect(result).toBe(id);
    });
  });

});