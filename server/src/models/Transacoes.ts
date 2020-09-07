import mongoose from 'mongoose'
const Schema = mongoose.Schema

const transacoesSchema = new Schema ({
    
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
})

const Transacoes = mongoose.model('transacoes', transacoesSchema)

export default Transacoes
