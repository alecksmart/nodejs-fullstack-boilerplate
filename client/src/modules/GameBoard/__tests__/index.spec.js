/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import { mockStore, shallowWithStore, mountWithStore } from 'testUtils';
import initialState from 'initialState';

import GameBoard from '../index';

let wrap;
let store;
let wrapper;
let props;
let context = initialState;
let stateChanged = {};
let propsChanged = {};
let useMount = true;

describe('>>> GameBoard Module', () => {
  beforeEach(() => {
    wrap = () => {
      context = { ...initialState, ...stateChanged };
      props = { ...props, ...propsChanged };
      store = mockStore(context);
      return (useMount ? mountWithStore : shallowWithStore)(<GameBoard store={store} {...props} />, context);
    };
  });

  afterEach(() => {
    wrapper.unmount();
    useMount = true;
    stateChanged = {};
    propsChanged = {};
  });

  it('+++ should capture the snapshot', () => {
    useMount = false;
    store = mockStore(initialState);
    wrapper = wrap();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
