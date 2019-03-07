import gql from 'graphql-tag'

export default gql`
  extend type Query {
    users(query: String): [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    deleteUser(id: String!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  type User {
    id: String!
    name: String!
    email: String!
    posts: [Post!]!
    comments: [Comment!]!
  }
`
