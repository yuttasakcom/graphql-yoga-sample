import { GraphQLServer } from 'graphql-yoga'
import uuidv4 from 'uuid/v4'

const users = [
  {
    id: '1',
    name: 'Yo'
  },
  {
    id: '2',
    name: 'Yea'
  },
  {
    id: '3',
    name: 'Sri'
  }
]

const posts = [
  {
    id: '1',
    title: 'GraphQL Yoga',
    description: 'Learning GraphQL Yoga',
    author: '1'
  }
]

const comments = [
  {
    id: '1',
    text: 'Cool',
    post: '1',
    author: '2'
  }
]

const typeDefs = `
  type Query {
    users: [User]
    posts: [Post]
    comments: [Comment]
  }

  type Mutation {
    addUser(data: UserInput): User!
  }

  input UserInput {
    name: String
  }

  type User {
    id: String!
    name: String!
  }

  type Post {
    id: String!
    title: String!
    description: String!
    author: User!
  }

  type Comment {
    id: String!
    text: String!
    post: Post!
    author: User!
  }
`

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
    comments: () => comments
  },
  Post: {
    author: parent => {
      return users.find(user => user.id === parent.author)
    }
  },
  Comment: {
    author: parent => {
      return users.find(user => user.id === parent.author)
    },
    post: parent => {
      return posts.find(post => post.id === parent.post)
    }
  },
  Mutation: {
    addUser: (parent, args) => {
      const user = {
        id: uuidv4(),
        name: args.data.name
      }
      users.push(user)
      return user
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log(`The server is up`)
})
