import Categorias from '@models/Categorias'

interface IargsIndex {
  userId: String
}

interface IargsCreate {
  userId: String
  name: String
}

class CategoriasController {
  async index (_: any, args: IargsIndex) {
    try {
      const data = await Categorias.find({ userId: args.userId })

      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async create (_: any, args: IargsCreate) {
    try {
      const data = await Categorias.findOne({ name: args.name })

      if (data) {
        if (data.userId.indexOf(args.userId)) return data

        data.userId.push(args.userId)
        const categoriaUpdated = await Categorias.findByIdAndUpdate({ _id: data._id }, data)

        return categoriaUpdated
      }

      const docs = new Categorias({
        userId: args.userId,
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
