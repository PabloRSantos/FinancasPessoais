import Transacoes from '@models/Transacoes'
import Users from '@models/Users'
import { MyContext } from 'src/server'
import formatDate from 'src/util/formattedDate'

interface CreateTransacao {
  transacao: {
    valor: String,
    title: String,
    isNegative: Boolean,
    date: Date,
    categoria: String,
  }
}

interface GetTransacao {
    TransacaoId: String
}

interface GetTransacoesFilters {
    Filters: {
      isNegative?: Boolean,
      date?: String,
      future?: Boolean,
      user: String
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

    return transacao
  }

  async index (_: any, args: GetTransacoesFilters, context: MyContext) {
    const userId = context.auth
    const { future, date, ...rest } = args.Filters
    rest.user = userId.toString()

    let transacoes = await Transacoes.find(rest as any)
      .populate(['categoria', 'user'])

    transacoes.forEach(transacao => {
      transacao.date = formatDate(transacao.date)
    })

    if (date) {
      transacoes = transacoes.filter(transacao => {
        const dateFiltered = formatDate(new Date(date.toString()))

        return transacao.date.getTime() === dateFiltered.getTime() && transacao
      })
    }

    return transacoes
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

      console.log(user.saldo)

      await Users.findByIdAndUpdate(userId, { saldo: newBalance })

      const docs = new Transacoes({
        user: userId,
        date,
        isNegative,
        title,
        valor,
        categoria
      })

      await docs.save()

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

  async delete (_: any, args: DeleteTransacao) {
    const TransicaoDelete = await Transacoes.findByIdAndDelete({ _id: args.TransacaoId })

    return TransicaoDelete
  }
}

export default new TransacoesController()
