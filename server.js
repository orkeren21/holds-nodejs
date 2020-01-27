import db from "./models";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { logger } from "./utils/logger";
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
app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  //logger.info(`Server ready at ${url}`);
});
