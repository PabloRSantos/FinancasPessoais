import Transacoes from '@models/Transacoes'

interface CreateTransacao {
    userId: String,
    valor: number
}

interface GetTransacao {
    TransicaoId: String
}

interface GetTransacoes {
    userId: String,
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

  async index (_: any, args: GetTransacoes) {
    const transacoes = await Transacoes.find({ userId: args.userId })
    return transacoes
  }

  async create (_: any, args: CreateTransacao) {
    const docs = new Transacoes({
      userId: args.userId,
      valor: args.valor
    })

    await docs.save()

    return docs
  }

  async update (_: any, args: UpdateTransacao) {
    const TransicaoUpdate = await Transacoes.findByIdAndUpdate({ _id: args.TransicaoId }, {
      valor: args.valor
    })

    return TransicaoUpdate
  }

  async delete (_: any, args: DeleteTransacao) {
    const TransicaoDelete = await Transacoes.findByIdAndDelete({ _id: args.TransicaoId })

    return TransicaoDelete
  }
}

export default new TransacoesController()
