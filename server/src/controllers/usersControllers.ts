import Users from '@models/Users'
import { MyContext } from 'src/server'

class UsersControllers {
  async query (_: any, args: any, context: MyContext) {
    try {
      const userId = context.auth

      const user = await Users.findById(userId)

      return user
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UsersControllers()
