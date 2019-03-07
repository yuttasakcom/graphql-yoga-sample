import gql from 'graphql-tag'

export default gql`
  extend type Query {
    users: [User!]!
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
    posts: [Post]
    comments: [Comment]
  }
`
