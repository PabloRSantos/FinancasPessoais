import Transacoes from '@models/Transacoes'
import { MyContext } from 'src/server'

interface CreateTransacao {
    valor: number
}

interface GetTransacao {
    TransicaoId: String
}

interface UpdateTransacao {
    TransicaoId: String
    valor: number
}

interface DeleteTransacao {
    TransicaoId: String
}

class TransacoesController {
  async show (_: any, args: GetTransacao) {
    const transacao = await Transacoes.findOne({ _id: args.TransicaoId })

    return transacao
  }

  async index (_: any, args: any, context: MyContext) {
    const userId = context.auth()
    const transacoes = await Transacoes.find({ userId: userId })
    return transacoes
  }

  async create (_: any, args: CreateTransacao, context: MyContext) {
    try {
      const userId = context.auth()

      const docs = new Transacoes({
        userId: userId,
        valor: args.valor
      })

      await docs.save()

      return docs
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async update (_: any, args: UpdateTransacao) {
    const TransicaoUpdate = await Transacoes.findByIdAndUpdate({ _id: args.TransicaoId }, {
      valor: args.valor
    })

    return TransicaoUpdate
  }

  async delete (_: any, args: DeleteTransacao) {
    const TransicaoDelete = await Transacoes.findByIdAndDelete({ _id: args.TransicaoId })

    console.log(TransicaoDelete)

    return TransicaoDelete
  }
}

export default new TransacoesController()
