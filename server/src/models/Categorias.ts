import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

export interface ICategoria extends Document {
  _id: String,
  users: [String],
  name: String,
  global: Boolean,
  icon: String
}

const categoriasSchema = new Schema({
  users: {
    type: [Schema.Types.ObjectId],
    ref: 'users'
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  global: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: 'defaultIcon.png'
  }

})

const Categorias = mongoose.model<ICategoria>('categorias', categoriasSchema)

export default Categorias
