import Categorias from '@models/Categorias'
import { MyContext } from 'src/server'

interface IargsCreate {
  name: String
}

class CategoriasController {
  async index (_: any, args: any, context: MyContext) {
    try {
      const userId = context.auth

      const data = await Categorias.find({ $or: [{ userId: userId }, { global: true }] })

      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async create (_: any, args: IargsCreate, context: MyContext) {
    try {
      const userId = context.auth

      const data = await Categorias.findOne({ name: args.name })

      if (data) {
        if (data.userId.indexOf(userId)) return data

        data.userId.push(userId)
        const categoriaUpdated = await Categorias.findByIdAndUpdate({ _id: data._id }, data)

        return categoriaUpdated
      }

      const docs = new Categorias({
        userId: userId,
        name: args.name
      })

      await docs.save()

      return docs
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

export default new CategoriasController()
