/* eslint-disable react/no-unused-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Toolbal.less';

class Toolbar extends PureComponent {
  render() {
    const { onNewGame, isGameOver } = this.props;
    return (
      <div className="Toolbar">
        <button
          type="button"
          onClick={onNewGame}
        >
          New Game
        </button>
        {isGameOver && (
          <div className="Toolbar Toolbar-GameOver">
            Game Over, click the button above to try again...
          </div>
        )}
      </div>
    );
  }
}

Toolbar.propTypes = {
  onNewGame: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool,
};

Toolbar.defaultProps = {
  isGameOver: false,
};

const mapStateToProps = state => ({
  isGameOver: state.pointsGame.isGameOver,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
