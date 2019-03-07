export default {
  Query: {
    posts: (_, args, { prisma }, info) => {
      const opArgs = {}

      if (args.query) {
        opArgs.where = {
          OR: [{ title_contains: args.query }, { body_contains: args.query }],
        }
      }

      return prisma.query.posts(opArgs, info)
    },
  },
  Mutation: {
    async createPost(_, { data }, { prisma }, info) {},
  },
}
