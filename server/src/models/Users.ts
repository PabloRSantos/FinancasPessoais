import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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


const Users = mongoose.model('users', userSchema)

export default Users
