import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface ITransacao extends Document {
  _id: String,
  userId: String,
  valor: String,
  title: String,
  categoriaId: String,
  isCompleted: Boolean
  isNegative: Boolean
}

const transacoesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  valor: {
    type: String,
    required: true
  },
  categoriaId: {
    type: [Schema.Types.ObjectId],
    ref: 'categorias',
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  isNegative: {
    type: Boolean,
    required: true
  }

})

const Transacoes = mongoose.model<ITransacao>('transacoes', transacoesSchema)

export default Transacoes
