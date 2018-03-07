import { users, USERS_LOAD } from './reducers';

describe('users reducer', () => {

  it('inits to empty array', () => {
    expect(users(undefined, {})).toEqual([]);
  });

  it('loads users', () => {
    const usersArray = [1, 2, 3];
    const state = users([], { type: USERS_LOAD, payload: usersArray });
    expect(state).toEqual(usersArray);
  });
});