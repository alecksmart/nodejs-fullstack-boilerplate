export const fetchHighscoresQuery = ({ limit, offset }) => `
query {
  highscores (limit: ${limit}, offset: ${offset}) {
    highscore
    user {
      name
    }
  }
}
`;