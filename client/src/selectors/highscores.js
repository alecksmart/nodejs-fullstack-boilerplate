import { createSelector } from 'reselect';

export const highscoresDataSelector = state => state.highscore.highscores;

export const highscoresSelector = createSelector(
  highscoresDataSelector,
  highscores => highscores.map(element => ({ score: element.highscore, userName: element.user.name }))
    .sort((a, b) => a.score < b.score),
);
