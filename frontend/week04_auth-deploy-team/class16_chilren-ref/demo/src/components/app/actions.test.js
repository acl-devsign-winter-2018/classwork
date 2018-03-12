import { makeChoice, doesPlayerWin } from './actions';
import { SELECT, END_GAME } from './reducers';

describe('game actions', () => {

  it('correct picks winner', () => {
    expect(doesPlayerWin('rock', 'scissors')).toBe(true);
    expect(doesPlayerWin('paper', 'rock')).toBe(true);
    expect(doesPlayerWin('scissors', 'paper')).toBe(true);
    expect(doesPlayerWin('scissors', 'rock')).toBe(false);
    expect(doesPlayerWin('rock', 'paper')).toBe(false);
    expect(doesPlayerWin('paper', 'scissors')).toBe(false);
  });

  it('dispatches select action', () => {
    const index = 0;
    const selection = 'rock';

    const result = makeChoice(index, selection);

    // mock the return call
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      selections: []
    }));
    result(dispatch, getState);

    expect(dispatch).toBeCalledWith({
      type: 'SELECT',
      payload: { index, selection }
    });

    expect(dispatch.mock.calls.length).toBe(1);

    expect(getState).toBeCalled();
  });

  it('dispatches END_GAME on win condition', () => {
    const index = 0;
    const selection = 'rock';

    const result = makeChoice(index, selection);

    // mock the return call
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      selections: ['rock', 'paper']
    }));
    result(dispatch, getState);

    expect(dispatch.mock.calls.length).toBe(2);

    expect(dispatch.mock.calls[0][0]).toEqual({
      type: SELECT,
      payload: { index, selection }
    });

    expect(getState).toBeCalled();

    expect(dispatch.mock.calls[1][0]).toEqual({
      type: END_GAME,
      payload: 1
    });
  });
});