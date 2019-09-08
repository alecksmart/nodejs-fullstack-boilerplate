/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import { userLoginRequested } from '../../actions/user';

// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';

import { getResults } from '../../utils/pointsGame';

import './Results.less';

// const query = gql`
//   query {
//     highscores {
//       highscore
//       user {
//         name
//       }
//     }
//   }
// `;

class Results extends PureComponent {
  componentDidMount() {
    const { userLoginRequested } = this.props;
    userLoginRequested();
  }

  render() {
    const { bonuses, total, highest, log } = this.props;
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
        {/* <h3>Players from Other Locations:</h3>
        <div className="Results-ServerHighscores">
          <Query query={query}>
            {result => {
              if (result.loading) return <p>loading...</p>;
              if (result.error) return <p>{result.error.message}</p>;
              return result.data.highscores.sort((a, b) => a.highscore < b.highscore).map(d => (
                <p>
                  {d.user.name}
                  :&nbsp;
                  {d.highscore}
                </p>
              ));
            }}
          </Query>
        </div> */}
      </div>
    );
  }
}

Results.propTypes = {
  bonuses: PropTypes.number,
  total: PropTypes.number,
  highest: PropTypes.number,
  log: PropTypes.any,
  userLoginRequested: PropTypes.func.isRequired,
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
});

const mapDispatchToProps = {
  userLoginRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
