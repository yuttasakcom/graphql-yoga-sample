import uuidv4 from 'uuid/v4'

export default {
  Query: {
    users: (parent, args, { models }) => models.user
  },
  User: {
    posts: (parent, args, { models }) => {
      return models.post.filter(post => post.author === parent.id)
    },
    comments: (parent, args, { models }) => {
      return models.comment.filter(comment => comment.author === parent.id)
    }
  },
  Mutation: {
    createUser: (parent, { input }, { models }) => {
      const user = {
        id: uuidv4(),
        name: input.name
      }
      models.user.push(user)
      return user
    }
  }
}
