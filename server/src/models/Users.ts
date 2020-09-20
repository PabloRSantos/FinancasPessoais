import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface IUser extends Document {
  _id: String,
  name: String,
  email: String,
  saldo: number,
  password: String,
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  saldo: {
    type: Number,
    default: 0
  }
})

const Users = mongoose.model<IUser>('users', userSchema)

export default Users
