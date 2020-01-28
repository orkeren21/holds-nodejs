import db from "./models";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import * as WishlistService from "./services/wishlistService";
import * as WishlistEntryService from "./services/wishlistEntryService";

const express = require('express');

const { ApolloServer, gql } = require("apollo-server-express");

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static('public'));

app.get('/api/v1/wishlists', async (req, res) => {
  
  const wishlists = await WishlistService.getAllWishlists();
  
  res.status(200).send({
    success: 'true',
    message: 'retrieved successfully',
    wishlists: wishlists,
  })
});

app.get('/api/v1/wishlist-entries', async (req, res) => {
  const wishlistID = req.query.wishlistID;
  const entries = await WishlistEntryService.findEntriesByWishlistId(wishlistID);

  res.status(200).send({
    success: 'true',
    message: 'retrieved successfully',
    entries: entries,
  })
});

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  //logger.info(`Server ready at ${url}`);
});
