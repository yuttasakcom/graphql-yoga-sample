export default {
  Query: {
    users: (_, args, { prisma }, info) => {
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
    async createUser(_, { data }, { prisma }, info) {
      const emailTaken = await prisma.exists.User({ email: data.email })

      if (emailTaken) {
        throw new Error('Email taken')
      }

      const user = await prisma.mutation.createUser({ data }, info)

      return user
    },
    async deleteUser(_, { id }, { prisma }, info) {
      const userExists = await prisma.exists.User({ id })
      if (!userExists) {
        throw new Error('User not found')
      }
      return prisma.mutation.deleteUser({ where: { id } }, info)
    },
    async updateUser(_, { id, data }, { prisma }, info) {
      return await prisma.mutation.updateUser(
        {
          where: { id },
          data,
        },
        info
      )
    },
  },
}
