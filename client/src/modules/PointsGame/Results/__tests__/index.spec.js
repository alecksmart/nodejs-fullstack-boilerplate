/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import { mockStore, shallowWithStore, mountWithStore } from 'testUtils';
import initialState from 'initialState';

import Results from '../index';

let wrap;
let store;
let wrapper;
let props;
let context = initialState;
let stateChanged = {};
let propsChanged = {};
let useMount = true;

describe('>>> Results Module', () => {
  beforeEach(() => {
    wrap = () => {
      context = { ...initialState, ...stateChanged };
      props = { ...props, ...propsChanged };
      store = mockStore(context);
      return (useMount ? mountWithStore : shallowWithStore)(<Results store={store} {...props} />, context);
    };
  });

  afterEach(() => {
    wrapper.unmount();
    useMount = true;
    stateChanged = {};
    propsChanged = {};
  });

  it('+++ should capture the snapshot of Results', () => {
    useMount = false;
    store = mockStore(initialState);
    wrapper = wrap();
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('+++ print log correctly', () => {
    stateChanged = { pointsGame: { log: [{ type: 'A' }, { type: 'B' }, { type: 'C' }] } };
    wrapper = wrap();
    expect(wrapper.find('.Result').length).toEqual(3);
  });
});
