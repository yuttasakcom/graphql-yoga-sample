import gql from 'graphql-tag'

export default gql`
  extend type Query {
    posts(query: String): [Post!]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    updatePost(id: ID!, data: UpdatePostInput!): Post!
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

  input UpdatePostInput {
    title: String!
    body: String!
    published: Boolean!
  }
`
