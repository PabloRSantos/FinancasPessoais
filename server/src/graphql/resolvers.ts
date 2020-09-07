
import usersController from '@controllers/usersControllers'
import transacoesController from '@controllers/transacoesController'

export default {
  Query: {
    user: usersController.query,
    transacoes: () => transacoesController.index,
    transacao: () => transacoesController.show
  },

  Mutation: {
    createUser: usersController.create,
    createTransacao: (_: any) => transacoesController.create,
    updateTransacao: () => transacoesController.update,
    deleteTransacao: () => transacoesController.delete
  }
}
