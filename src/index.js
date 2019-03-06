import { GraphQLServer, PubSub } from 'graphql-yoga'

import models from './models'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    models,
    pubsub
  }
})

server.start(() => {
  console.log(`The server is up`)
})
