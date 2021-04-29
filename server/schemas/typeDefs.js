
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// - Creating a query
// create our typeDefs  
// type Query { }  is defining a query
// helloWorld is the name of the query 
// String is the return type of the data  query returns
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }
`;

module.exports = typeDefs;