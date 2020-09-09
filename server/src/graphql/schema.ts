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
    _id: String,
    userId: Float,
    valor: Float,
}

input createUserInput {
    email: String!,
    name: String!,
    password: String!,
}

type Categoria {
  _id: String,
  userId: [String!],
  name: String,
  global: Boolean,
}

type Query {
    user(id: String!): User,
    categorias(userId: String!): [Categoria],
    transacoes(userId: String!): [Transacao],
    transacao(TransicaoId: String!):Transacao
}

type Mutation {
    createUser(user: createUserInput!): User,
    createCategorias(userId: String!, name: String!): Categoria,
    createTransacao(userId: String!, valor: Float): Transacao,
    updateTransacao(TransicaoId: String!, newValor: Float): Transacao,
    deleteTransacao(TransicaoId: String!):Transacao,
}
`

export default typeRefs
