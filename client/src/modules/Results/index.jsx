import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';

import { fetchHighcoreRequested } from '../../actions/highscore';
import { highscoresSelector } from '../../selectors/highscores';
import { getResults } from '../../utils/pointsGame';

import Spinner from '../../components/Spinner';

import './Results.less';

export const Results = ({
  bonuses,
  total,
  highest,
  log,
  highscores,
  isLoading,
  fetchHighcoreRequested,
}) => {
  useEffect(() => {
    fetchHighcoreRequested();
  }, []);

  const results = !isEmpty(log) ? getResults(log) : {};

  return (
    <div className="Results">
      <div className="Results-Header">
        <div>Item</div>
        <div>Qty</div>
        <div>Score</div>
      </div>
      <div className="Results-Rows">
        {map(results, (v, k) => {
          const id = uniqueId('result_row');
          return (
            <div className="Results-Rows Result" key={id}>
              <div>{k}</div>
              <div>{v.points + v.bonus}</div>
              <div>{v.bonus}</div>
            </div>
          );
        })}
      </div>
      <div className="Results-Bonuses">
        Bonuses:&nbsp;
        {bonuses}
      </div>
      <div className="Results-Total">
        Total:&nbsp;
        {total}
      </div>
      <div className="Results-Highest">
        <h3>Your Highest Score:</h3>
        {highest}
      </div>
      <h3>Players from Other Locations:</h3>
      <div className="Results-ServerHighscores">
        {
          highscores.map(highscore => {
            const id = uniqueId('highscore');
            return (
              <p key={id}>
                {highscore.userName}
                :&nbsp;
                {highscore.score}
              </p>
            );
          })
        }
        <Spinner isVisisble={isLoading} />
      </div>
    </div>
  );
};

Results.propTypes = {
  bonuses: PropTypes.number,
  total: PropTypes.number,
  highest: PropTypes.number,
  log: PropTypes.instanceOf(Array),
  highscores: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchHighcoreRequested: PropTypes.func.isRequired,
};

Results.defaultProps = {
  bonuses: 0,
  total: 0,
  highest: 0,
  log: [],
};

const mapStateToProps = state => ({
  bonuses: state.pointsGame.bonuses,
  total: state.pointsGame.total,
  highest: state.pointsGame.highest,
  log: state.pointsGame.log,
  highscores: highscoresSelector(state),
  isLoading: !isEmpty(state.highscore.loading),
});

const mapDispatchToProps = {
  fetchHighcoreRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
