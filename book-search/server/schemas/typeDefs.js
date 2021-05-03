// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      data: BookInput
      ): User
    removeBook(bookId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput{
    bookId: ID!
    authors: [String]!
    description: String
    image: String
    link: String
    title: String!
  }
`;


// export the typeDefs
module.exports = typeDefs;