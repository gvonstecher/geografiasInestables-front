import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client;

/**
 * getApolloClient
 */

export function getApolloClient(uri) {
  if (!client) {
    client = _createApolloClient(uri);
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient(uri) {
  return new ApolloClient({
    link: new HttpLink({
      uri: uri,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }
  });
}