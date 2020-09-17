import Users from '@models/Users'
import bcrypt from 'bcrypt'
import generateToken from 'src/util/generateToken'

interface CreateUser {
  user: {
    email: string;
    name: string;
    password: string;
  }
}

interface LoginUser {
  email: string,
  password: string,
}

class SessionController {
  async cadastro (_: any, args: CreateUser) {
    try {
      const EmailExists = await Users.findOne({ email: args.user.email })

      if (EmailExists) return 'Email já existente'

      const hash = await bcrypt.hash(args.user.password, 10)

      const doc = new Users({
        email: args.user.email,
        name: args.user.name,
        password: hash
      })

      await doc.save()

      const token = generateToken(doc._id.toString())

      return { token }
    } catch (error) {
      console.log(error)
    }
  }

  async login (_: any, args: LoginUser) {
    const user = await Users.findOne({ email: args.email })

    if (!user) return 'Email não confere'

    if (!await bcrypt.compare(args.password, user.password.toString())) return 'Senha não confere'

    const token = generateToken(user._id.toString())

    return { token }
  }
}

export default new SessionController()
