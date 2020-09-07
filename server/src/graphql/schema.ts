import { gql } from 'apollo-server'

const typeRefs = gql`

type User {
    _id: String
    name: String,
    email: String,
    password: String,
    saldo: Float
}

type Transacao {
    _id: String!
    userId: Float
    valor: Float
}

input createUserInput {
    email: String!,
    name: String!,
    password: String!,
}

type Query {
    user(id: String!): User,
    transacoes(userId: String): [Transacao],
    transacao(TransicaoId: String):Transacao
}

type Mutation {
    createUser(user: createUserInput): User,
    createTransacao(userId: String!):Transacao,
    updateTransacao(TransicaoId: String!, newValor: Float): Transacao,
    deleteTransacao(TransicaoId: String!):Transacao,
}
`

export default typeRefs
