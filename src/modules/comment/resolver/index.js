export default {
  Query: {
    comments: (parent, args, { models }) => models.comment,
  },
  Comment: {
    author: (parent, args, { models }) => {
      return models.user.find(user => user.id === parent.author)
    },
    post: (parent, args, { models }) => {
      return models.post.find(post => post.id === parent.post)
    },
  },
}
