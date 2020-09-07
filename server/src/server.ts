import { ApolloServer } from 'apollo-server'

import mongoose from 'mongoose'
import resolvers from './graphql/resolvers'
import schemas from './graphql/schema'

mongoose.Promise = global.Promise
mongoose
  .connect('mongodb://localhost:27017/financas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Conectado'))
  .catch((e) => console.log(e))

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers
})

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`))
