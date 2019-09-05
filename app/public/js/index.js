import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient();
const query = gql`
  query {
    highscores {
      highscore
      user {
        name
      }
    }
  }
`;

const { body } = document;
client.query({ query }).then((results) => {
  results.data.highscores
    .sort((a, b) => a.highscore < b.highscore)
    // eslint-disable-next-line no-use-before-define
    .forEach((element) => renderElement(body, element));
});

const renderElement = (body, element) => {
  const section = document.createElement('section');
  const domString = `
    <p>
      <strong>User: </strong>${element.user.name}
    </p>
    <p>
      <strong>Score: </strong>${element.highscore}
    </p>
  `;
  section.innerHTML = domString;
  body.appendChild(section);
};