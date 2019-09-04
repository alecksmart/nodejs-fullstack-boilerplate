import { handleActions } from 'redux-actions';
import { MAX_POINTS } from '../config/pointsGame';
import {
  setNewGame,
  setCellClicked,
  setGameOver,
} from '../actions/pointsGame';
import { getTotal, getBonuses } from '../utils/pointsGame';

export const initialState = {
  started: false,
  isGameOver: false,
  bonuses: 0,
  total: 0,
  highest: 0,
  log: [],
};

export default handleActions({
  [setNewGame](state) {
    return {
      ...state,
      started: true,
      isGameOver: false,
      log: [],
      total: 0,
      bonuses: 0,
    };
  },
  [setGameOver](state) {
    return {
      ...state,
      started: false,
      isGameOver: true,
      log: [],
    };
  },
  [setCellClicked](state, action) {
    const newLog = [...state.log, action.payload.logEntry];
    const newTotal = getTotal(newLog);
    const isGameOver = newLog.length >= MAX_POINTS;
    return {
      ...state,
      log: newLog,
      total: newTotal,
      bonuses: getBonuses(newLog),
      highest: (isGameOver && newTotal > state.highest ? newTotal : state.highest),
      isGameOver,
    };
  },
}, initialState);
