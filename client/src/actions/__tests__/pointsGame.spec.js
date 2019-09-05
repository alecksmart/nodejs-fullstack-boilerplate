// eslint-disable-next-line no-unused-vars
import {
  pointsGameActions,
  setNewGame,
} from '../pointsGame';

describe('>>> Test actions', () => {
  it('+++ should set new game', () => {
    const expectedAction = {
      type: pointsGameActions.NEW_GAME,
      payload: { },
    };
    expect(setNewGame({})).toEqual(expectedAction);
  });
});
