import { ApolloServer } from 'apollo-server'

import mongoose from 'mongoose'
import resolvers from './graphql/resolvers'
import schemas from './graphql/schema'
import dotenv from 'dotenv'

import authUser from './util/auth'

dotenv.config()

export interface MyContext {
  auth: () => string
}

const mongoUrl = process.env.MONGO_URL as string

mongoose.Promise = global.Promise
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: ({ req }) => ({
    auth: authUser(req.headers.authorization as String)
  })
})

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`))
