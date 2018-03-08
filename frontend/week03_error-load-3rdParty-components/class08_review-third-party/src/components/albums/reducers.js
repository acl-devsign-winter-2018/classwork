export const ALBUM_LOAD = 'ALBUM_LOAD';
export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_DELETE = 'ALBUM_DELETE';
export const ALBUM_ADD = 'ALBUM_ADD';
export const ALBUM_REMOVE = 'ALBUM_REMOVE';

export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload.map(album => album._id);
    case ALBUM_ADD:
      return [
        ...state,
        payload._id
      ];
    case ALBUM_DELETE: {
      const idToDelete = payload;
      return state.filter(id => id !== idToDelete); 
    }
    default:
      return state;
  }
}

export function albumsById(state = {}, { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload.reduce((map, album) => {
        map[album._id] = album;
        return map;
      }, {});
    case ALBUM_ADD:
      return {
        ...state,
        [payload._id]: payload
      };
    case ALBUM_DELETE: {
      const id = payload;
      const copy = { ...state };
      delete copy[id];
      return copy;
    }
    default:
      return state;
  }
}

export function recentAlbums(state = [], { type, payload }) {
  switch(type) {
    case ALBUM_LOAD:
      return [
        payload._id, 
        ...state.filter(id => id !== payload._id)
      ].slice(0, 10);
    case ALBUM_REMOVE:
      return state.filter(id => id != payload);
    default: 
      return state;
  }
}

export function album(state = null, { type, payload }) {
  switch(type) {
    case ALBUM_LOAD:
      return payload;
    default:
      return state;
  }
}