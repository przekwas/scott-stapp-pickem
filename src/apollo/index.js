import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.REACT_APP_QUERY_URL || 'https://lukes-projects.herokuapp.com/graphql',
    cache: new InMemoryCache()
});