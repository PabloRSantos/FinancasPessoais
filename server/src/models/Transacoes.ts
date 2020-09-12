import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface ITransacao extends Document {
  _id: String,
  userId: String,
  valor: Number
}

const transacoesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: 'categorias',
    required: true
  }

})

const Transacoes = mongoose.model<ITransacao>('transacoes', transacoesSchema)

export default Transacoes
