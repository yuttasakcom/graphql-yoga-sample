import gql from 'graphql-tag'

export default gql`
  extend type Query {
    users(query: String): [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    deleteUser(id: String!): User!
    updateUser(id: String!, data: UpdateUserInput!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input UpdateUserInput {
    name: String!
  }

  type User {
    id: String!
    name: String!
    email: String!
    posts: [Post!]!
    comments: [Comment!]!
  }
`
