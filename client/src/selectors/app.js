import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

const userLoadingSelector = state => state.user.loading;
const highscoresLoadingSelector = state => state.highscore.loading;

export const userIsLoggedSelector = state => state.user && state.user.name !== undefined;

export const isLoadingSelector = createSelector(
  userLoadingSelector,
  highscoresLoadingSelector,
  (userLoading, highscoresLoading) => !isEmpty(userLoading) || !isEmpty(highscoresLoading),
);
