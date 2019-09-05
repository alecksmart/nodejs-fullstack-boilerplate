/* eslint-disable no-plusplus */
import random from 'lodash/random';
import isEmpty from 'lodash/isEmpty';
import keys from 'lodash/keys';
import reduce from 'lodash/reduce';
import {
  POINTGAME_TILES,
  POINTGAME_ROWS,
  POINTGAME_COLS,
  POINTGAME_RULES,
} from '../config/pointsGame';

const markers = keys(POINTGAME_RULES);

export const checkTile = (map, x, y) => {
  const result = map.filter(v => v.x === x && v.y === y);
  return !isEmpty(result) ? result[0] : false;
};

export const makeMap = () => {
  const map = [];

  while (map.length < POINTGAME_TILES) {
    const x = random(0, POINTGAME_COLS - 1);
    const y = random(0, POINTGAME_ROWS - 1);
    if (checkTile(map, x, y) === false) {
      const type = markers[random(0, markers.length - 1)];
      map.push({ x, y, type, clicked: false });
    }
  }

  return map;
};

export const getResults = stack => stack.reduce((results, result) => {
  const { type } = result;
  const rule = POINTGAME_RULES[type];
  if (results[type] === undefined) {
    results[type] = {
      qty: 1,
      points: rule.points,
      bonus: 0,
    };
  } else {
    const newQty = results[type].qty + 1;
    results[type] = {
      qty: newQty,
      points: results[type].points + rule.points,
      bonus: (newQty % rule.when === 0) ? results[type].bonus + rule.bonus : results[type].bonus,
    };
  }
  return results;
}, {});

export const getTotal = stack => reduce(getResults(stack), (result, row) => result + row.points + row.bonus, 0);

export const getBonuses = stack => reduce(getResults(stack), (result, row) => result + row.bonus, 0);
