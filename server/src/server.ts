import {ApolloServer} from 'apollo-server'

import mongoose from 'mongoose'
import resolvers from './graphql/resolvers'
import schemas from './graphql/schema'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/financas', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Conectado'))
    .catch(e => console.log('aaaaaaa'+ e))


const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
})
console.log("fsdgs");
console.log("fsdgs");
console.log("fsdgs")

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`))
