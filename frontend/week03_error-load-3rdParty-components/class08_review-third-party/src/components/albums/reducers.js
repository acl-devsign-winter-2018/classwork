export const ALBUMS_LOAD = 'ALBUMS_LOAD';

export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUMS_LOAD:
      return payload;
    default:
      return state;
  }
}