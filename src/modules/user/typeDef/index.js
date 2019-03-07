import gql from 'graphql-tag'

export default gql`
  extend type Query {
    users(query: String): [User!]!
  }

  extend type Mutation {
    createUser(input: CreateUserInput): User!
  }

  input CreateUserInput {
    name: String
  }

  type User {
    id: String!
    name: String!
    email: String!
    posts: [Post!]!
    comments: [Comment!]!
  }
`
