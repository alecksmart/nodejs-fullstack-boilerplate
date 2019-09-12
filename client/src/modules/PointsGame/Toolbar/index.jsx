import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import './Toolbal.less';

export const Toolbar = ({ onNewGame, isGameOver }) => (
  <div className="Toolbar">
    <Button variant="contained" color="primary" onClick={onNewGame}>
      New Game
    </Button>
    {isGameOver && (
      <div className="Toolbar Toolbar-GameOver">
        Game Over, click the button above to try again...
      </div>
    )}
  </div>
);

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
