import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface ICategoria extends Document {
  _id: String,
  userId: [String],
  name: String,
  global: Boolean,
}

const categoriasSchema = new Schema({
  userId: {
    type: [Schema.Types.ObjectId],
    ref: 'users',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  global: {
    type: Boolean,
    default: false
  }

})

const Categorias = mongoose.model<ICategoria>('categorias', categoriasSchema)

export default Categorias
