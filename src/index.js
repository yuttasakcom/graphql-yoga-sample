import { GraphQLServer, PubSub } from 'graphql-yoga'

import models from './models'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    models,
    pubsub,
    prisma,
  },
})

server.start(() => {
  console.log('Server is running on port 4000')
})
