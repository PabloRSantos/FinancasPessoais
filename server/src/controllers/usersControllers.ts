import Transacoes from '@models/Transacoes'
import Users from '@models/Users'
import { MyContext } from 'src/server'

interface IArgsFilters {
  isNegative: boolean
}

class UsersControllers {
  async query (_: any, args: IArgsFilters, context: MyContext) {
    try {
      const user = context.auth
      const { isNegative } = args

      const userDatas = await Users.findById(user)

      if (isNegative !== undefined && userDatas?.saldo) {
        const transacoes = await Transacoes.find({ user } as any)

        const valorFiltered = transacoes?.map(transacao => {
          const valor = Number(transacao.valor.replace(/\D/g, ''))

          let returnValue = 0
          if (isNegative && transacao.isNegative) {
            returnValue = valor
          }

          if (!isNegative && !transacao.isNegative) {
            returnValue = valor
          }

          return returnValue
        })

        const newSaldo = valorFiltered.reduce((acumulator, currentValue) => {
          return acumulator + currentValue
        })

        userDatas.saldo = newSaldo
      }
      return userDatas
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UsersControllers()
