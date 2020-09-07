import Users from '../../models/Users'

interface CreateUser {
    email: string,
    name: string,
    password: string,
}

interface QueryUser {
    id: string
}

class usersControllers {
    async query (_, args: QueryUser){
        try {

            const user = await Users.findById(args.id)  

            return user
            
        } catch (error) {
            console.log(error)
        }
    }

    async create (_: any, args: CreateUser){
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

     
    }
}

export default new usersControllers()