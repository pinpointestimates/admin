import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const ApolloWrapper = ({ children }) => {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_SERVICE,
  });

  const authLink = new ApolloLink((operation, forward) => {
    // Retrive and set the token from localstorage
    const token = localStorage.getItem('token');
    const xtoken = localStorage.getItem('xtoken');

    if (!!token) {
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
          'x-session-token': xtoken ? xtoken : '', //Used in the signup
        },
      });
    }
    // Call the next link in the middleware chain.
    return forward(operation);
  });

  const logoutLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((e) => {
        if (
          !!e.extensions &&
          !!e.extensions.code &&
          e.extensions.code === 'UNAUTHENTICATED'
        ) {
          localStorage.removeItem('token'); //TODO handle this, cause if this occurs it will make the client spin for ever
          window.location.reload();
        }
      });
    }
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link: logoutLink.concat(authLink).concat(httpLink), // Chain it with the HttpLink
    cache,
  });

  const query = gql`
    query Theme {
      theme {
        light
      }
    }
  `;

  // Create a new to-do item
  const initTheme = {
    light: false,
    __typename: 'Theme',
  };

  // Write back to the to-do list, appending the new item
  client.writeQuery({
    query,
    data: {
      theme: initTheme,
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
