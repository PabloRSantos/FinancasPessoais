import Categorias from '@models/Categorias'
import { MyContext } from 'src/server'

interface IargsCreate {
  name: String
}

interface IargsIndex {
  page: number
}

export interface IpageDatas {
  pageAtual: number,
  pageTotal: number
}

class CategoriasController {
  async index (_: any, args: IargsIndex, context: MyContext) {
    try {
      const userId = context.auth.toString()
      const { page } = args

      const pageDatas: IpageDatas = {} as IpageDatas

      console.log(page)

      const skip = (page - 1) * 10

      const categorias = await Categorias.find({ $or: [{ users: userId }, { global: true }] })
        .limit(10).skip(skip).sort({ name: 1 })

      pageDatas.pageTotal = (await Categorias.countDocuments({ $or: [{ users: userId }, { global: true }] }) / 10)
      pageDatas.pageAtual = page

      categorias.forEach(dataItem => {
        const iconUri = `https://docs.google.com/uc?id=${dataItem.icon}`

        dataItem.icon = iconUri
      })

      return { categorias, pageDatas }
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async create (_: any, args: IargsCreate, context: MyContext) {
    try {
      const userId = context.auth.toString()

      const data = await Categorias.findOne({ name: args.name })

      if (data) {
        if (data.users.indexOf(userId)) return data

        data.users.push(userId)
        const categoriaUpdated = await Categorias.findByIdAndUpdate({ _id: data._id }, data)

        return categoriaUpdated
      }

      const docs = new Categorias({
        users: userId,
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
