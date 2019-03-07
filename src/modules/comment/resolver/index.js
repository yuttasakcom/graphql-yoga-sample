export default {
  Query: {
    comments: (parent, args, { prisma }, info) => {
      return prisma.query.comments(null, info)
    },
  },
}
