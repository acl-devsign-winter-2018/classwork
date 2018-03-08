export const ALBUMS_LOAD = 'ALBUMS_LOAD';
export const ALBUM_DELETE = 'ALBUM_DELETE';
export const ALBUM_ADD = 'ALBUM_ADD';

export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload;
    case ALBUM_ADD:
      return [
        ...state,
        payload
      ];
    case ALBUM_DELETE: {
      const idToDelete = payload;
      return state.filter(a => a._id !== idToDelete); 
    }
    default:
      return state;
  }
}