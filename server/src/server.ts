import { ApolloServer } from 'apollo-server'

import mongoose from 'mongoose'
import resolvers from './graphql/resolvers'
import schemas from './graphql/schema'
import dotenv from 'dotenv'

import authUser from './util/auth'

dotenv.config()

export interface MyContext {
  auth: () => String
}

try {
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

  server.listen(process.env.PORT || 3333).then(({ url }) => console.log(`🚀 Server ready at ${url}`))
} catch (error) {
  console.log(error)
}
