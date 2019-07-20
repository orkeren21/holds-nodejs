
import "@babel/polyfill";
import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag'
//import nock from 'nock';

import { ApolloServer } from 'apollo-server'
import typeDefs from "../schema";
import resolvers from "../resolvers";
import db from "../models";

"use strict";

/**
 * Integration testing utils
 */
const constructTestServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db },
  });

  return { server };
};

const GET_WISHLISTS = gql`
  query wishlists {
    wishlists {
        id
        opportunitySFID
        createdAt
        updatedAt
    }
  }
`;

describe('Queries', () => {
    it('fetches a list of wishlists', async () => {
    // create an instance of ApolloServer that mocks out context, while reusing
    // existing dataSources, resolvers, and typeDefs.
    // This function returns the server instance as well as our dataSource
    // instances, so we can overwrite the underlying fetchers
    const {server} = constructTestServer();

    // mock the datasources' underlying fetch methods, whether that's a REST
    // lookup in the RESTDataSource or the store query in the Sequelize datasource
    // launchAPI.get = jest.fn(() => [mockLaunchResponse]);
    // userAPI.store = mockStore;
    // userAPI.store.trips.findAll.mockReturnValueOnce([
    //   {dataValues: {launchId: 1}},
    // ]);

    // use our test server as input to the createTestClient fn
    // This will give us an interface, similar to apolloClient.query
    // to run queries against our instance of ApolloServer
    const {query} = createTestClient(server);
    const res = await query({query: GET_WISHLISTS});
    console.log(res);
    expect(true).toBe(true);
    //expect(res).toMatchSnapshot();
  });
});