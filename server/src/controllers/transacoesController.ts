import Transacoes from '@models/Transacoes'
import { MyContext } from 'src/server'

interface CreateTransacao {
  transacao: {
    valor: String,
    title: String,
    isNegative: Boolean,
    isCompleted: Boolean,
    categoriaId: String,
  }
}

interface GetTransacao {
    TransacaoId: String
}

interface UpdateTransacao {
    TransacaoId: String
    newValor: number
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
        isCompleted,
        isNegative,
        title,
        valor,
        categoriaId
      } = args.transacao

      const docs = new Transacoes({
        userId,
        isCompleted,
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
    const TransicaoUpdate = await Transacoes.findByIdAndUpdate({ _id: args.TransacaoId }, {
      valor: args.newValor
    })

    return TransicaoUpdate
  }

  async delete (_: any, args: DeleteTransacao) {
    const TransicaoDelete = await Transacoes.findByIdAndDelete({ _id: args.TransacaoId })

    // console.log(TransicaoDelete)

    return TransicaoDelete
  }
}

export default new TransacoesController()
