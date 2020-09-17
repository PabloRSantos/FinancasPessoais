import { gql } from 'apollo-server'

const typeRefs = gql`

type User {
    _id: String,
    name: String,
    email: String,
    password: String,
    saldo: Float
}

type Transacao {
    _id: String,
    categoriaId: String,
    userId: String,
    valor: String,
    title: String,
    isCompleted: Boolean,
    isNegative: Boolean
}

input createUserInput {
    email: String,
    name: String,
    password: String,
}

input createTransacaoInput {
  valor: String,
  title: String,
  isNegative: Boolean,
  isCompleted: Boolean,
  categoriaId: String,
}

type Categoria {
  _id: String,
  userId: [String],
  name: String,
  global: Boolean,
  icon: String
}

type Token {
  token: String
}

type Query {
    user: User,
    categorias: [Categoria],
    transacoes: [Transacao],
    transacao(TransacaoId: String): Transacao
}

type Mutation {
    cadastro(user: createUserInput): Token,
    login(email: String, password: String): Token,
    createTransacao(transacao: createTransacaoInput): Transacao,
    createCategorias(name: String): Categoria,
    updateTransacao(TransacaoId: String, newValor: String): Transacao,
    deleteTransacao(TransacaoId: String): Transacao
}
`

export default typeRefs
