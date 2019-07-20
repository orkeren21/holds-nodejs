import "@babel/polyfill";
import { createTestClient } from "apollo-server-testing";
import gql from "graphql-tag";

import { ApolloServer } from "apollo-server";
import typeDefs from "../schema";
import resolvers from "../resolvers";
import db from "../models";
import truncate from "../utils/truncate";

("use strict");

/**
 * Integration testing utils
 */
const constructTestServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db }
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
const CREATE_WISHLIST_ENTRY = gql`
  mutation CreateWishlistEntry(
    $wishlistId: Int
    $reservableUUID: String!
    $createdBy: String!
    $opportunitySFID: String
  ) {
    createWishlistEntry(
      wishlistId: $wishlistId
      reservableUUID: $reservableUUID
      createdBy: $createdBy
      opportunitySFID: $opportunitySFID
    ) {
      id
      wishlistId
      reservableUUID
      createdBy
      createdAt
      updatedAt
    }
  }
`;

beforeAll(async () => {
  await truncate();
});

afterAll(() => {
  // Closing the DB connection allows Jest to exit successfully.
  db.sequelize.close().then(() => console.log("shut down gracefully"));
});

describe("Mutations and Queries", () => {
  let wishlistId = null;
  it("creates a wishlist entry", async () => {
    const { server } = constructTestServer();

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_WISHLIST_ENTRY,
      variables: {
        reservableUUID: "ecddf807-ad16-4a08-8467-5769da078e9e",
        createdBy: "Or Keren",
        opportunitySFID: "opp_id"
      }
    });

    expect(res.data.createWishlistEntry.reservableUUID).toBe(
      "ecddf807-ad16-4a08-8467-5769da078e9e"
    );
    wishlistId = res.data.createWishlistEntry.wishlistId;
  });

  it("fetches a list of wishlists", async () => {
    const { server } = constructTestServer();

    const { query } = createTestClient(server);
    const res = await query({ query: GET_WISHLISTS });

    expect(res.data.wishlists).toHaveLength(1);
    expect(Number(res.data.wishlists[0].id)).toBe(wishlistId)
  });
});