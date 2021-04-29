const express = require('express');
// import Apollo Server
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo Server and pass our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// integrate our ApolloServer with Express application as middleware ==> This will create a special /graphql endpoint for Express.js server
// that will serve as the main endpoit for accessing the entire API
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
