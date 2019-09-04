import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GameField from '../GameField';
import Results from '../Results';
import Toolbar from '../Toolbar';

import { setNewGame, setCellClicked } from '../../actions/pointsGame';
import { makeMap } from '../../utils/pointsGame';

import './GameBoard.less';

class GameBoard extends PureComponent {
  constructor(props) {
    super(props);

    const pointsMap = makeMap();
    this.state = {
      pointsMap,
    };
  }

  onNewGame = () => {
    const { setNewGame } = this.props;
    const pointsMap = makeMap();
    this.setState({ pointsMap });
    setNewGame();
  }

  onPointSelected = (celldata) => {
    const { type } = celldata;
    const { setCellClicked } = this.props;
    setCellClicked({
      logEntry: { type },
    });
  }

  renderScores = () => (
    <ul className="Scores-Rules">
      <li>A: costs: 50, each 3-rd gives adds +50 bonus</li>
      <li>B: costs: 30, each 2-nd gives adds +30 bonus</li>
      <li>C: costs: 20</li>
      <li>B: costs: 15</li>
    </ul>
  );

  render() {
    const { pointsMap } = this.state;
    return (
      <div className="GameBoard">
        <GameField
          pointsMap={pointsMap}
          onPointSelected={this.onPointSelected}
        />
        <div className="Scores">
          <h1>How To Play</h1>
          <ol>
            <li>Click &quot;New Game&quot; below</li>
            <li>The field will randomly create 15 pills</li>
            <li>Open 10 pills of 15 trying to guess the best score</li>
            <li>
              Bonuses for pills types:
              {this.renderScores()}
            </li>
            <li>After opening 10 pills, the game is over, and the High Score count is updated</li>
            <li>Proceed to Step 1 to start over</li>
          </ol>
          <h1>SCORES</h1>
          <Results />
          <Toolbar onNewGame={this.onNewGame} />
        </div>
      </div>
    );
  }
}

GameBoard.propTypes = {
  setCellClicked: PropTypes.func.isRequired,
  setNewGame: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isGameOver: state.pointsGame.isGameOver,
});

const mapDispatchToProps = {
  setNewGame,
  setCellClicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
