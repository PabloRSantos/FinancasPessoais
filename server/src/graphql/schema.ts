import { gql } from 'apollo-server'

const typeRefs = gql`

scalar Date

type User {
    _id: ID,
    name: String,
    email: String,
    password: String,
    saldo: Float
}

type Transacao {
    _id: ID,
    categoria: Categoria,
    user: User,
    valor: String,
    title: String,
    date: Date,
    isNegative: Boolean
}

input Filters {
  isNegative: Boolean,
  page: Int,
  sortBy: String
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
  date: Date,
  categoria: ID,
}

type Categoria {
  _id: String,
  users: [User],
  name: String,
  global: Boolean,
  icon: String
}

type pageDatas {
    pageAtual: Int,
    pageTotal: Float
}

type getTransacoes {
  transacoes: [Transacao]
  pageDatas: pageDatas
}

type Token {
  token: String
}

type Query {
    getUser(isNegative: Boolean): User,
    getCategorias: [Categoria],
    getTotalTransacoes(Filters: Filters): getTransacoes,
    getFuturasTransacoes(Filters: Filters): getTransacoes,
    getTransacoesFinalizadas(Filters: Filters): getTransacoes,
    getTransacao(TransacaoId: String): Transacao
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
