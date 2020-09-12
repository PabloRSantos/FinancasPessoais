
import usersController from '@controllers/usersControllers'
import transacoesController from '@controllers/transacoesController'
import categoriasController from '@controllers/categoriasController'
import sessionController from '@controllers/sessionController'

export default {
  Query: {
    user: usersController.query,
    categorias: categoriasController.index,
    transacoes: transacoesController.index,
    transacao: transacoesController.show
  },

  Mutation: {
    Cadastro: sessionController.cadastro,
    Login: sessionController.login,
    createTransacao: transacoesController.create,
    createCategorias: categoriasController.create,
    updateTransacao: transacoesController.update,
    deleteTransacao: transacoesController.delete
  }
}
