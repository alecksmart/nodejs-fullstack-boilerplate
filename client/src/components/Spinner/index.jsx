/* eslint-disable react/prop-types */
import React from 'react';

import './Spinner.less';

const Spinner = ({ isVisisble }) => (
  <div className={`Spinner Spinner--${isVisisble ? 'Visible' : 'Hidden'}`} />
);

export default Spinner;
