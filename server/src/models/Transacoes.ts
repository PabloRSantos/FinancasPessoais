import mongoose, { Document } from 'mongoose'
import { ICategoria } from './Categorias'
import { IUser } from './Users'
const Schema = mongoose.Schema

interface ITransacao extends Document {
  _id: String,
  user: [IUser],
  valor: String,
  title: String,
  categoria: ICategoria,
  date: Date
  isNegative: Boolean
}

const transacoesSchema = new Schema({
  user: {
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
  categoria: {
    type: Schema.Types.ObjectId,
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
