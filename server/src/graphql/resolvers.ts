
import Users from '../models/Users'
import Transacoes from '../models/Transacoes'

import usersController from './controllers/usersControllers'





export default {
    Query: {
        user: usersController.query,
        transacoes: () => {},
        transacao: () => {},
    },

    Mutation: {
        createUser: usersController.create,
        createTransacao:(_: any) => {},
        updateTransacao: () => {},
        deleteTransacao: () => {},
    }
}