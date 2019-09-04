/* eslint-disable no-plusplus */
/**
 * More to come likewise...
 */
import sample from 'lodash/sample';
import reducer, { initialState } from '../pointsGame';
import {
  setNewGame,
  setGameOver,
  setCellClicked,
} from '../../actions/pointsGame';

describe('>>> Test reducers', () => {
  it('+++ should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('+++ should start the new game', () => {
    const newGameAction = {
      type: setNewGame,
    };
    const expected = { ...initialState, started: true };
    expect(reducer(initialState, newGameAction)).toEqual(expected);
  });

  it('+++ should set game to be over', () => {
    const gameOverAction = {
      type: setGameOver,
    };
    const expected = { ...initialState, started: false, isGameOver: true };
    expect(reducer(initialState, gameOverAction)).toEqual(expected);
  });

  it('+++ should add correct resultset and recalsulate all results', () => {
    const addPointAction = {
      type: setCellClicked,
      payload: { logEntry: { type: 'B' } },
    };

    const result = reducer(initialState, addPointAction);
    const expectedTotalPoints = 30;
    expect(result.total).toEqual(expectedTotalPoints);

    const result2 = reducer(result, addPointAction);
    const expectedTotalPoints2 = 90;
    expect(result2.total).toEqual(expectedTotalPoints2);
  });

  it('+++ make 10 clicks with random results to get Game Over', () => {
    const types = ['A', 'B', 'C', 'D'];
    let type;
    let result = initialState;
    const addPointAction = () => ({
      type: setCellClicked,
      payload: { logEntry: { type } },
    });
    for (let index = 0; index < 10; index++) {
      type = sample(types);
      result = reducer(result, addPointAction());
    }
    expect(result.isGameOver).toEqual(true);
  });
});
