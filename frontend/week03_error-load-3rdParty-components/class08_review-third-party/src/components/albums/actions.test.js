jest.mock('../../services/api', () => ({ 
  getAlbums: jest.fn(() => Promise.resolve('PAYLOAD'))
}));

import { loadAlbums } from './actions';
import { ALBUMS_LOAD } from './reducers';

describe('albums reducer', () => {

  it('load albums', () => {
    const { type, payload } = loadAlbums();
    expect(type).toBe(ALBUMS_LOAD);
    return payload.then(result => {
      expect(result).toBe('PAYLOAD');
    });
  });

});