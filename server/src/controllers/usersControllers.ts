import Users from '@models/Users'

interface CreateUser {
  email: string;
  name: string;
  password: string;
}

interface QueryUser {
  id: string;
}

class UsersControllers {
  async query (_: any, args: QueryUser) {
    try {
      const user = await Users.findById(args.id)

      return user
    } catch (error) {
      console.log(error)
    }
  }

  async create (_: any, args: CreateUser) {
    try {
      const doc = new Users({
        email: args.email,
        name: args.name,
        password: args.password
      })

      await doc.save()

      return doc
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UsersControllers()
