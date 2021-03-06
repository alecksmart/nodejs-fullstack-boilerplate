import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
import Cell from '../Cell';
import {
  POINTGAME_ROWS,
  POINTGAME_COLS,
} from '../../../config/pointsGame';
import { checkTile } from '../../../utils/pointsGame';

import './GameField.less';

export const GameField = ({ pointsMap, onPointSelected }) => {
  const renderMap = () => {
    const collection = [];
    for (let x = 0; x < POINTGAME_ROWS; x++) {
      for (let y = 0; y < POINTGAME_COLS; y++) {
        let props = checkTile(pointsMap, x, y);
        if (props === false) {
          props = { x, y, type: '', clicked: false };
        }
        const k = uniqueId(`${x}_${y}_`);
        collection.push(<Cell key={k} onPointSelected={onPointSelected} {...props} />);
      }
    }
    return collection;
  };

  return (
    <div className="GameField">
      <div className="GameField-Wrap">
        <div className="GameField GameField-Board">{renderMap()}</div>
      </div>
    </div>
  );
};

GameField.propTypes = {
  pointsMap: PropTypes.arrayOf(PropTypes.shape({})),
  onPointSelected: PropTypes.func.isRequired,
};

GameField.defaultProps = {
  pointsMap: [],
};

export default connect()(GameField);
