import uuidv4 from 'uuid/v4'

export default {
  Query: {
    users: (parent, args, { models }) => models.user,
    posts: (parent, args, { models }) => models.post,
    comments: (parent, args, { models }) => models.comment,
  },
  User: {
    posts: (parent, args, { models }) => {
      return models.post.filter(post => post.author === parent.id)
    },
    comments: (parent, args, { models }) => {
      return models.comment.filter(comment => comment.author === parent.id)
    },
  },
  Post: {
    author: (parent, args, { models }) => {
      return models.user.find(user => user.id === parent.author)
    },
    comments: (parent, args, { models }) => {
      return models.comment.filter(comment => comment.post === parent.id)
    },
  },
  Comment: {
    author: (parent, args, { models }) => {
      return models.user.find(user => user.id === parent.author)
    },
    post: (parent, args, { models }) => {
      return models.post.find(post => post.id === parent.post)
    },
  },
  Mutation: {
    addUser: (parent, args, { models }) => {
      const user = {
        id: uuidv4(),
        name: args.data.name,
      }
      models.user.push(user)
      return user
    },
  },
  Subscription: {
    count: {
      subscribe(parent, args, { pubsub }, info) {
        let count = 0

        setInterval(() => {
          count++
          pubsub.publish('count', {
            count,
          })
        }, 1000)

        return pubsub.asyncIterator('count')
      },
    },
  },
}
