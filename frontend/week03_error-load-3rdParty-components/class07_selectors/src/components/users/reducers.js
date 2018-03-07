
export const USERS_LOAD = 'USER_LOAD';

export function users(state = [], { type, payload }) {
  switch(type) {
    case USERS_LOAD:
      return payload;
    default:
      return state;
  }
}