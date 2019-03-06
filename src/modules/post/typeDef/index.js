import gql from 'graphql-tag'

export default gql`
  extend type Query {
    posts: [Post!]!
  }

  type Post {
    id: String!
    title: String!
    description: String!
    author: User!
    comments: [Comment]
  }
`
