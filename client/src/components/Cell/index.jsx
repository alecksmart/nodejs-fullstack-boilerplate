/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './Cell.less';

class Cell extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  onClick = () => {
    const { onPointSelected, x, y, type } = this.props;

    this.setState({ clicked: true });
    onPointSelected({ x, y, type });
  }

  getDisabled = () => {
    const { type, isGameOver } = this.props;
    const { clicked } = this.state;
    return type === '' || clicked || isGameOver;
  }

  render() {
    const { type } = this.props;
    const { clicked } = this.state;

    return (
      <button
        type="button"
        className={`Cell Cell--${type ? 'clickable' : 'nonclickable'} Cell--${clicked ? 'clicked' : 'active'}`}
        disabled={this.getDisabled()}
        onClick={this.onClick}
      >
        {type !== '' && clicked ? type : ' '}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  isGameOver: state.pointsGame.isGameOver,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
