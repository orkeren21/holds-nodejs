import db from "./models";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import dotenv from "dotenv";
dotenv.config();

const { ApolloServer, gql } = require('apollo-server');

var Logger = require('le_node');
var logger = new Logger({
  token: process.env.LOGENTRIES_TOKEN
});

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ 
    typeDefs: gql(typeDefs), 
    resolvers,
    context: { db } 
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  logger.info(`Server ready at ${url}`);
});