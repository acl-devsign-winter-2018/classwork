export const SELECT = 'SELECT';
export const GAME_END = 'GAME_END';
export const GAME_NEW = 'GAME_NEW';
export const MATCH_END = 'MATCH_END';
export const MATCHES_LOAD = 'MATCHES_LOAD';

export function selections(state = [], { type, payload }) {
  switch(type) {
    case SELECT: {
      const { index, selection } = payload;
      const copy = state.slice();
      copy[index] = selection;
      return copy;
    }
    case GAME_NEW:
      return [];
    default:
      return state;
  }
}

export function games(state = [], { type, payload }) {
  switch(type) {
    case GAME_END:
      return [...state, payload];
    // case GAME_NEW:
    //   return [];
    default: 
      return state;
  }
}

export function lastMatch(state = null, { type, payload }) {
  switch(type) {
    case MATCH_END:
      return payload;
    case GAME_NEW:
      return null;
    default:
      return state;
  }
}

export function matches(state = [], { type, payload }) {
  switch(type) {
    case MATCH_END:
      return [...state, payload];
    case MATCHES_LOAD:
      return payload;
    default: 
      return state;
  }
}

export function winner(state = null, { type, payload }) {
  switch(type) {
    case GAME_END:
      return payload.result;
    case MATCH_END:
    case GAME_NEW:
      return null;
    default:
      return state;
  }
}