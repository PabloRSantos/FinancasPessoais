import Transacoes from '@models/Transacoes'
import Users from '@models/Users'
import { MyContext } from 'src/server'
import { getTotalTransactions, getFutureTransactions, getPastTransactions } from '../util/getTransacoes'

export interface Transacao {
  valor: String,
  title: String,
  isNegative: Boolean,
  date: Date,
  categoria: String,
}

interface CreateTransacao {
  transacao: Transacao
}

interface GetTransacao {
    TransacaoId: String
}

interface GetTransacoesFilters {
    Filters: {
      isNegative?: Boolean,
      date?: Date,
      user: string
      page: number
      sort: string
    }
}

interface UpdateTransacao {
    TransacaoId: String
    newValor: String
}

interface DeleteTransacao {
  TransacaoId: String
}

class TransacoesController {
  async show (_: any, args: GetTransacao) {
    const transacao = await Transacoes.findOne({ _id: args.TransacaoId })

    // if (date) {
    //   transacoes = transacoes.filter(transacao => {
    //     const dateFiltered = formatDate(new Date(date.toString()))

    //     return transacao.date.getTime() === dateFiltered.getTime() && transacao
    //   })
    // }

    return transacao
  }

  async indexTotal (_: any, args: GetTransacoesFilters, context: MyContext) {
    const userId = context.auth
    const { date, page, sort, ...rest } = args.Filters
    rest.user = userId.toString()

    const data = await getTotalTransactions({ ...rest, page, sort })

    return data
  }

  async indexCompleteds (_: any, args: GetTransacoesFilters, context: MyContext) {
    const userId = context.auth
    const { page, sort, ...rest } = args.Filters
    rest.user = userId.toString()

    const data = await getPastTransactions({ ...rest, page, sort })

    return data
  }

  async indexFutures (_: any, args: GetTransacoesFilters, context: MyContext) {
    const userId = context.auth
    const { page, sort, ...rest } = args.Filters
    rest.user = userId.toString()

    const data = await getFutureTransactions({ ...rest, sort, page })

    return data
  }

  async create (_: any, args: CreateTransacao, context: MyContext) {
    try {
      const userId = context.auth

      let {
        date,
        isNegative,
        title,
        valor,
        categoria
      } = args.transacao

      const user = await Users.findById(userId, 'saldo')

      if (!user) return 'Erro ao autenticar usuário'

      if (!valor.includes(',')) {
        valor = valor + ',00'
      }

      const NumberValor = Number(valor.replace(/\D/g, ''))

      const newBalance = isNegative
        ? user.saldo - NumberValor
        : user.saldo + NumberValor

      const docs = new Transacoes({
        user: userId,
        date,
        isNegative,
        title,
        valor,
        categoria
      })

      await docs.save()

      await Users.findByIdAndUpdate(userId, { saldo: newBalance })

      return docs
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async update (_: any, args: UpdateTransacao) {
    const TransacaoUpdate = await Transacoes.findByIdAndUpdate({ _id: args.TransacaoId }, {
      valor: args.newValor
    })

    return TransacaoUpdate
  }

  async delete (_: any, args: DeleteTransacao, context: MyContext) {
    try {
      const userId = context.auth

      const User = await Users.findById(userId)

      if (!User) return 'Erro ao encontrar usuário'

      const DeletedTransaction = await Transacoes.findById(args.TransacaoId)

      if (!DeletedTransaction) return 'Erro ao encontrar Transacao'

      await Transacoes.findByIdAndDelete(args.TransacaoId)

      let deletedTransactionValue = Number(DeletedTransaction.valor.replace(/\D/g, ''))

      if (DeletedTransaction.isNegative) deletedTransactionValue = -deletedTransactionValue

      const NovoSaldo = User.saldo - deletedTransactionValue

      await Users.findByIdAndUpdate(userId, { saldo: NovoSaldo })

      return DeletedTransaction
    } catch (error) {
      console.log(error)
    }
  }
}

export default new TransacoesController()
