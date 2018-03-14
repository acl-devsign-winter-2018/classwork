export const ROOM_LOAD = 'ROOM_LOAD';

export function rooms(state = [], { type, payload }) {
  switch(type) {
    case ROOM_LOAD:
      return payload;
    default:
      return state;
  }
}