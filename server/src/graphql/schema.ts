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
    userId: Float,
    valor: Float,
}

input createUserInput {
    email: String,
    name: String,
    password: String,
}

type Categoria {
  _id: String,
  userId: [String],
  name: String,
  global: Boolean,
}

type Query {
    user(): User,
    categorias(): [Categoria],
    transacoes(): [Transacao],
    transacao(TransacaoId: String): Transacao
}

type Mutation {
    Cadastro(user: createUserInput): Token: String,
    Login(email: String, password: String): Token: String,
    createTransacao(valor: Float): Transacao,
    createCategorias(name: String): Categoria,
    updateTransacao(TransacaoId: String, newValor: Float): Transacao,
    deleteTransacao(TransacaoId: String):Transacao
}
`

export default typeRefs
