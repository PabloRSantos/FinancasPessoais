
import usersController from '@controllers/usersControllers'
import transacoesController from '@controllers/transacoesController'
import categoriasController from '@controllers/categoriasController'
import sessionController from '@controllers/sessionController'

export default {
  Query: {
    getUser: usersController.query,
    getCategorias: categoriasController.index,
    getTotalTransacoes: transacoesController.indexTotal,
    getFuturasTransacoes: transacoesController.indexFutures,
    getTransacoesFinalizadas: transacoesController.indexCompleteds,
    getTransacao: transacoesController.show
  },

  Mutation: {
    cadastro: sessionController.cadastro,
    login: sessionController.login,
    createTransacao: transacoesController.create,
    createCategorias: categoriasController.create,
    updateTransacao: transacoesController.update,
    deleteTransacao: transacoesController.delete
  }
}
