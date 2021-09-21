import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://lukes-projects.herokuapp.com/graphql',
    cache: new InMemoryCache()
});