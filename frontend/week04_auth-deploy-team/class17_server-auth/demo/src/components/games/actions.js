import { SELECT, GAME_END, GAME_NEW, MATCH_END, MATCHES_LOAD } from './reducers';
// import { save, getAll } from '../../services/gameApi';
import { db } from '../../services/firebase';

const matchesRef = db.ref('matches');

export const doesPlayerWin = (p1, p2) => {
  return (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper');
};

export const TIE = 3;
export const P1_WIN = 0;
export const P2_WIN = 1;

const selection = ['rock', 'paper', 'scissors'];

const randomSelection = () => selection[Math.floor(Math.random() * 3)];

export const getGameResult = (p1, p2) => {
  return p1 === p2 ? TIE : doesPlayerWin(p1, p2) ? P1_WIN : P2_WIN;
};

const SCORE = [1, 0, .5];

export const makeChoice = (index, selection) => {
  return (dispatch, getState) => {
    // player choice
    dispatch({
      type: SELECT,
      payload: { index, selection }
    });

    // random computer choice
    dispatch({
      type: SELECT,
      payload: { 
        index: 1, 
        selection: randomSelection()
      }
    });

    // get both selections
    const { selections } = getState();
    const [player, computer] = selections;
    
    const result = player === computer ? 2 : doesPlayerWin(player, computer) ? 0 : 1;

    dispatch({
      type: GAME_END,
      payload: {
        timestamp: new Date(),
        selections,
        result
      }
    });

    if(result === 1) {
      // LOOSE
      dispatch(endMatch());
    }
    else {
      setTimeout(() => {
        dispatch(newGame());
      }, 2000);
    }

  };
};

const endMatch = () => {
  return (dispatch, getState) => {
    const { games } = getState();

    const match = {
      score: games.reduce((score, game) => (score + SCORE[game.result]), 0),
      games: games.length
    };

    // fb style:
    const newRef = matchesRef.push();

    return dispatch({
      type: MATCH_END,
      payload: newRef.set(match).then(() => {
        match.key = newRef.key;
        return match;
      })
    });

    // REST style API
    // return dispatch({
    //   type: MATCH_END,
    //   payload: save(match).then(({ name }) => {
    //     match.key = name;
    //     return match;
    //   })
    // });
  };
};

export const newGame = () => ({
  type: GAME_NEW
});


export const loadMatches = () => {
  return {
    type: MATCHES_LOAD,
    payload: matchesRef.orderByChild('score').limitToLast(5).once('value').then(data => {
      const matches = data.val();
      if(!matches) return [];

      return Object.keys(matches).map(key => {
        const match = matches[key];
        match.key = key;
        return match;
      }).sort((a, b) => b.score - a.score);
    })
  };
};