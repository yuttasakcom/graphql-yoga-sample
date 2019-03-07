import uuidv4 from 'uuid/v4'

export default {
  Query: {
    users: (parent, args, { prisma }, info) => {
      const opArgs = {}

      if (args.query) {
        opArgs.where = {
          OR: [{ name_contains: args.query }, { email_contains: args.query }],
        }
      }

      return prisma.query.users(opArgs, info)
    },
  },
  Mutation: {
    createUser: (parent, { input }, { models }) => {
      const user = {
        id: uuidv4(),
        name: input.name,
      }
      models.user.push(user)
      return user
    },
  },
}
