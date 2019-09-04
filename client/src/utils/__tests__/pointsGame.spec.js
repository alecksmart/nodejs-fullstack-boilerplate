// eslint-disable-next-line no-unused-vars
import {
  makeMap,
  checkTile,
  getResults,
} from '../pointsGame';
import {
  POINTGAME_TILES,
} from '../../config/pointsGame';

describe('>>> Test game utils', () => {
  it('+++ should create the correct game board', () => {
    const map = makeMap();
    expect(map.length).toEqual(POINTGAME_TILES);

    const log = [{ type: 'D' }, { type: 'D' }];
    const results = getResults(log);
    const expectedPoints = 30;
    expect(results.D.points).toEqual(expectedPoints);

    log.push({ type: 'B' });
    log.push({ type: 'B' });
    const results2 = getResults(log);
    const expectedBonus = 30;
    expect(results2.B.bonus).toEqual(expectedBonus);

    const row = { x: 3, y: 4, type: 'B', clicked: false };
    map[0] = row;
    const result = checkTile(map, row.x, row.y);
    expect(result.type).toEqual(row.type);
  });
});
