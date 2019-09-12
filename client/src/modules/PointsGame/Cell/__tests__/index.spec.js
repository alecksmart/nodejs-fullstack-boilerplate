/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import React from 'react';
import { mockStore, shallowWithStore, mountWithStore } from 'testUtils';
import initialState from 'initialState';
import Cell from '../index';

const onPointSelected = jest.fn();

let wrap;
let wrapper;
let props = {
  type: 'A',
  onPointSelected,
};
let context = initialState;
let stateChanged = {};
let propsChanged = {};
let useMount = true;

const store = mockStore(initialState);

describe('>>> Cell snapshot', () => {
  beforeEach(() => {
    wrap = () => {
      context = { ...initialState, ...stateChanged };
      props = { ...props, ...propsChanged };
      return (useMount ? mountWithStore : shallowWithStore)(<Cell store={store} {...props} />, context);
    };
  });

  afterEach(() => {
    wrapper.unmount();
    useMount = true;
    stateChanged = {};
    propsChanged = {};
  });

  it('+++ should capture the snapshot of Cell', () => {
    useMount = false;
    wrapper = wrap();
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('+++ active cell should have propper classes', () => {
    wrapper = wrap();
    const button = wrapper.find('button');

    expect(button).not.toBe(null);
    expect(button.hasClass('Cell--clickable')).toBe(true);
    expect(button.hasClass('Cell--active')).toBe(true);
  });

  it('+++ simple cell should have propper classes', () => {
    propsChanged = { type: false };
    wrapper = wrap();
    const button = wrapper.find('button');

    expect(button).not.toBe(null);
    expect(button.hasClass('Cell--nonclickable')).toBe(true);
    expect(button.hasClass('Cell--active')).toBe(true);
  });

  it('+++ clicks on button should take correct effects', () => {
    wrapper = wrap();
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onPointSelected).toBeCalledTimes(1);
  });
});
