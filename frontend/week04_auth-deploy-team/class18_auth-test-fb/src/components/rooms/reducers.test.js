import { rooms, ROOM_LOAD } from './reducers';

describe('rooms reducers', () => {

  it('loads rooms', () => {
    const state = rooms([], { type: ROOM_LOAD, payload: [1, 2, 3] });
    expect(state).toEqual([1, 2, 3]);
  });

});