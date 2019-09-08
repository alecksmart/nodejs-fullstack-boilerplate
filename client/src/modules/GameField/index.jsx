import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
import Cell from '../../components/Cell';
import {
  POINTGAME_ROWS,
  POINTGAME_COLS,
} from '../../config/pointsGame';
import { checkTile } from '../../utils/pointsGame';

import './GameField.less';

class GameField extends PureComponent {
  renderMap() {
    const { pointsMap, onPointSelected } = this.props;
    const collection = [];
    for (let x = 0; x < POINTGAME_ROWS; x++) {
      for (let y = 0; y < POINTGAME_COLS; y++) {
        const k = uniqueId(`${x}_${y}_`);
        let props = checkTile(pointsMap, x, y);
        if (props === false) {
          props = { x, y, type: '', clicked: false };
        }
        collection.push(<Cell key={k} onPointSelected={onPointSelected} {...props} />);
      }
    }
    return collection;
  }

  render() {
    return (
      <div className="GameField">
        <div className="GameField-Wrap">
          <div className="GameField GameField-Board">{this.renderMap()}</div>
        </div>
      </div>
    );
  }
}

GameField.propTypes = {
  pointsMap: PropTypes.arrayOf(PropTypes.shape({})),
  onPointSelected: PropTypes.func.isRequired,
};

GameField.defaultProps = {
  pointsMap: [],
};

export default connect()(GameField);
