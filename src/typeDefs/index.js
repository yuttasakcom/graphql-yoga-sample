import gql from 'graphql-tag'

export default gql`
  type Query {
    users: [User!]!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Mutation {
    addUser(data: UserInput): User!
  }

  type Subscription {
    count: Int!
  }

  input UserInput {
    name: String
  }

  type User {
    id: String!
    name: String!
  }

  type Post {
    id: String!
    title: String!
    description: String!
    author: User!
  }

  type Comment {
    id: String!
    text: String!
    post: Post!
    author: User!
  }
`
