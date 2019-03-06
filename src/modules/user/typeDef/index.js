import gql from 'graphql-tag'

export default gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    addUser(data: UserInput): User!
  }

  input UserInput {
    name: String
  }

  type User {
    id: String!
    name: String!
    posts: [Post]
    comments: [Comment]
  }
`
