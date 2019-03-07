import gql from 'graphql-tag'

export default gql`
  extend type Query {
    posts(query: String): [Post!]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): Post!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }
`
