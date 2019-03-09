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
    async createPost(_, { data }, { prisma }, info) {
      return await prisma.mutation.createPost(
        {
          data: {
            title: data.title,
            body: data.body,
            published: data.published,
            author: {
              connect: {
                id: data.author,
              },
            },
          },
        },
        info
      )
    },
    async deletePost(_, { id }, { prisma }, info) {
      return await prisma.mutation.deletePost({ where: { id } }, info)
    },
  },
}
