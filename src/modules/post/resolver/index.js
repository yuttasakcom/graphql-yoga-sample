export default {
  Query: {
    posts: (parent, args, { models }) => models.post,
  },
  Post: {
    author: (parent, args, { models }) => {
      return models.user.find(user => user.id === parent.author)
    },
    comments: (parent, args, { models }) => {
      return models.comment.filter(comment => comment.post === parent.id)
    },
  },
}
