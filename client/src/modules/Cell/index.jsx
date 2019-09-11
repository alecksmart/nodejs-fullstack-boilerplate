import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Cell.less';

export const Cell = ({ type, isGameOver, onPointSelected, x, y }) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked({ clicked: true });
    onPointSelected({ x, y, type });
  };

  const getDisabled = () => type === '' || clicked || isGameOver;

  return (
    <button
      type="button"
      className={`Cell Cell--${type ? 'clickable' : 'nonclickable'} Cell--${clicked ? 'clicked' : 'active'}`}
      disabled={getDisabled()}
      onClick={onClick}
    >
      {type !== '' && clicked ? type : ' '}
    </button>
  );
};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  onPointSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isGameOver: state.pointsGame.isGameOver,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
