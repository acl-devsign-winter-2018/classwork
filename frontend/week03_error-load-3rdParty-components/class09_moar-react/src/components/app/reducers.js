export const SELECT = 'SELECT';
export const END_GAME = 'END_GAME';
export const NEW_GAME = 'NEW_GAME';

export function selections(state = [], { type, payload }) {
  switch(type) {
    case SELECT: {
      const { index, selection } = payload;
      const copy = state.slice();
      copy[index] = selection;
      return copy;
    }
    case NEW_GAME:
      return [];
    default:
      return state;
  }
}

export function winner(state = null, { type, payload }) {
  switch(type) {
    case END_GAME:
      return payload;
    case NEW_GAME:
      return null;
    default:
      return state;
  }
}