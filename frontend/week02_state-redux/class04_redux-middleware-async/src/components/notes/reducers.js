export const NOTE_ADD = 'NOTE_ADD';
export const NOTE_REMOVE = 'NOTE_REMOVE';
export const NOTE_UPDATE = 'NOTE_UPDATE';
export const NOTE_LOAD = 'NOTE_LOAD';

export function notes(state = [], { type, payload }) {
  switch(type) {
    case NOTE_LOAD:
      return payload;
    case NOTE_ADD:
      return [
        ...state,
        payload
      ];
    case NOTE_REMOVE:
      return state.filter(n => n.id !== payload);
    case NOTE_UPDATE: {
      const index = state.findIndex(n => n.id === payload.id);
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}
