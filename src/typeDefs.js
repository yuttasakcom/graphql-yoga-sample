import gql from 'graphql-tag'

import userType from './modules/user/typeDef'
import postType from './modules/post/typeDef'
import commentType from './modules/comment/typeDef'

const defaultType = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [defaultType, userType, postType, commentType]
