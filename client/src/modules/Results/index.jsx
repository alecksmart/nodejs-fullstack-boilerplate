/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import { getResults } from '../../utils/pointsGame';

import './Results.less';

class Results extends PureComponent {
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
          Highest Score Ever:&nbsp;
          {highest}
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  bonuses: PropTypes.number,
  total: PropTypes.number,
  highest: PropTypes.number,
  log: PropTypes.any,
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

export default connect(mapStateToProps)(Results);
