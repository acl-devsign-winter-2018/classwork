import { SELECT, END_GAME, NEW_GAME } from './reducers';

const doesPlayerWin = (p1, p2) => {
  return (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper');
};

export const makeChoice = (index, selection) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT,
      payload: { index, selection }
    });

    const { selections } = getState();
    const [p1, p2] = selections;
    if(!p1 || !p2) return;

    const result = p1 === p2 ? 3 : doesPlayerWin(p1, p2) ? 0 : 1;

    dispatch({
      type: END_GAME,
      payload: result
    });

  };
};

export const newGame = () => ({
  type: NEW_GAME
});