import { gql } from 'apollo-server'

const typeRefs = gql`
    type User {
        _id: ID
        name: String,
        email: String,
        password: String,
        saldo: Float
    }

    type Transacao {
        _id: ID!
        user_id: Float
        valor: Float
    }

    input createUserInput {
        email: String!,
        name: String!,
        password: String!,
    }

    type Query {
        user(id: ID!): User,
        transacoes(user_id: Float): [Transacao],
        transacao(user_id: Float):Transacao
    }

    type Mutation {
        createUser(user: createUserInput): User,
        createTransacao(user_id: Float!):Transacao,
        updateTransacao(user_id: Float!, newValor: Float): Transacao,
        deleteTransacao(user_id: Float!):Transacao,
    }
`

export default typeRefs