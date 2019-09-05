/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Provider } from 'react-redux';
import { unmount } from 'enzyme';
import { mockStore, shallowWithStore, mountWithStore } from 'testUtils';
import initialState from 'initialState';
import GameBoard from '../modules/GameBoard/index';

let store;
let wrap;
let wrapper;
let context = initialState;
let useMount = true;

describe('>>> Client entry point with store', () => {
  beforeEach(() => {
    wrap = () => (useMount ? mountWithStore : shallowWithStore)(
      <Provider store={store}>
        <GameBoard />
      </Provider>,
      context,
    );
  });

  afterEach(() => {
    wrapper.unmount();
    useMount = true;
  });

  it('+++ should capture the snapshot of GameBoard', () => {
    useMount = false;
    store = mockStore(initialState);
    wrapper = wrap();
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('+++ should show Game Over', () => {
    context = { ...context, pointsGame: { ...context.pointsGame, isGameOver: true } };
    store = mockStore(context);
    wrapper = wrap();
    const expectedText = 'Game Over, click the button above to try again...';
    expect(wrapper.find('.Toolbar-GameOver').text()).toEqual(expectedText);
  });

  it('+++ should create a new Game', () => {
    store = mockStore(context);
    wrapper = wrap();
    const mapBefore = wrapper.find('GameBoard').state().pointsMap;
    wrapper.find('GameBoard').instance().onNewGame();
    const mapAfter = wrapper.find('GameBoard').state().pointsMap;
    expect(mapBefore).not.toEqual(mapAfter);
  });
});
