import gql from 'graphql-tag'

export default gql`
  extend type Query {
    comments: [Comment!]!
  }

  type Comment {
    id: String!
    text: String!
    post: Post!
    author: User!
  }
`
