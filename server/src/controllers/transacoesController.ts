import Transacoes from '@models/Transacoes'
import { MyContext } from 'src/server'

interface CreateTransacao {
  transacao: {
    valor: String,
    title: String,
    isNegative: Boolean,
    date: Date,
    categoriaId: String,
  }
}

interface GetTransacao {
    TransacaoId: String
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

  async index (_: any, args: any, context: MyContext) {
    const userId = context.auth
    const transacoes = await Transacoes.find({ userId })
    return transacoes
  }

  async create (_: any, args: CreateTransacao, context: MyContext) {
    try {
      const userId = context.auth

      const {
        date,
        isNegative,
        title,
        valor,
        categoriaId
      } = args.transacao

      const docs = new Transacoes({
        userId,
        date,
        isNegative,
        title,
        valor,
        categoriaId
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

    // console.log(TransicaoDelete)

    return TransicaoDelete
  }
}

export default new TransacoesController()
