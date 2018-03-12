import { SELECT, END_GAME, NEW_GAME, GAME_HISTORY_LOAD } from './reducers';

export const doesPlayerWin = (p1, p2) => {
  return (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper');
};

export const TIE = 3;
export const P1_WIN = 0;
export const P2_WIN = 1;

export const getGameResult = (p1, p2) => {
  return p1 === p2 ? TIE : doesPlayerWin(p1, p2) ? P1_WIN : P2_WIN;
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
      payload: {
        timestamp: new Date(),
        result
      }
    });

  };
};

export const newGame = () => ({
  type: NEW_GAME
});

export const loadGameHistory = () => {
  const games = window.localStorage.games;
  if(!games) return;

  return {
    type: GAME_HISTORY_LOAD,
    payload: JSON.parse(games)
  };
};