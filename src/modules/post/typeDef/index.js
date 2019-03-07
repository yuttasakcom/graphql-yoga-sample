import gql from 'graphql-tag'

export default gql`
  extend type Query {
    posts(query: String): [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }
`
