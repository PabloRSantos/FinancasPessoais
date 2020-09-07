
import Users from '../models/Users'
import Transacoes from '../models/Transacoes'
import {ObjectId} from 'mongoose'


interface QueryUser {
    _id: number
}

interface createUser {
    email: string,
    name: string,
    password: string,
}

export default {
    Query: {
        user: async (_: any, args: any) => {
            
            try {
                const id = new ObjectId(args.id)

                console.log(id)

                const user = await Users.findById(id)  

                console.log(user)
    
                return user
            } catch (error) {
                console.log(error)
            }
        },
        transacoes: () => {},
        transacao: () => {},
    },

    Mutation: {
        createUser: async (_: any, args: createUser) => {
            try {

                const doc = new Users({
                    email: args.user.email,
                    name: args.user.name,
                    password: args.user.password
                })
                await doc.save()
    
                return doc

            } catch (error) {
                console.log(error)
            }

         
        },

        createTransacao:(_: any) => {},
        updateTransacao: () => {},
        deleteTransacao: () => {},
    }
}