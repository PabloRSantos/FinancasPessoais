import { IpageDatas } from '@controllers/categoriasController'
import Transacoes from '@models/Transacoes'
import formatDate from './formattedDate'

interface IArgs {
  isNegative?: Boolean,
  date?: String,
  user: string
  page: number
  sort: string
}

export const getTotalTransactions = async (args: IArgs) => {
  const { page, sort, date, ...rest } = args
  const pageDatas: IpageDatas = {} as IpageDatas

  const skip = (page - 1) * 10
  const sortBy = sort || 'date'

  const transacoes = await Transacoes.find(rest as any)
    .populate(['categoria', 'user']).limit(10).skip(skip).sort({ [sortBy]: -1 })

  transacoes.forEach(transacao => {
    transacao.date = formatDate(transacao.date as Date)
    transacao.categoria.icon = `https://docs.google.com/uc?id=${transacao.categoria.icon}`
  })

  pageDatas.pageTotal = (await Transacoes.countDocuments(rest as any) / 10)
  pageDatas.pageAtual = page

  return { transacoes, pageDatas }
}

export const getFutureTransactions = async (args: IArgs) => {
  const { page, sort, ...rest } = args
  const pageDatas: IpageDatas = {} as IpageDatas

  const skip = (page - 1) * 10
  const sortBy = sort || 'date'

  const Today = new Date()

  const transacoes = await Transacoes.find({ ...rest, date: { $gte: Today } } as any)
    .populate(['categoria', 'user']).limit(10).skip(skip).sort({ [sortBy]: -1 })

  transacoes.forEach(transacao => {
    transacao.date = formatDate(transacao.date as Date)
    transacao.categoria.icon = `https://docs.google.com/uc?id=${transacao.categoria.icon}`
  })

  pageDatas.pageTotal = (await Transacoes.countDocuments({ ...rest, date: { $gte: Today } } as any) / 10)
  pageDatas.pageAtual = page

  return { transacoes, pageDatas }
}

export const getPastTransactions = async (args: IArgs) => {
  const { page, sort, ...rest } = args
  const pageDatas: IpageDatas = {} as IpageDatas

  const skip = (page - 1) * 10
  const sortBy = sort || 'date'

  const Today = new Date()

  const transacoes = await Transacoes.find({ ...rest, date: { $lte: Today } } as any)
    .populate(['categoria', 'user']).limit(10).skip(skip).sort({ [sortBy]: -1 })

  transacoes.forEach(transacao => {
    transacao.date = formatDate(transacao.date as Date)
    transacao.categoria.icon = `https://docs.google.com/uc?id=${transacao.categoria.icon}`
  })

  pageDatas.pageTotal = (await Transacoes.countDocuments({ ...rest, date: { $lte: Today } } as any) / 10)
  pageDatas.pageAtual = page

  return { transacoes, pageDatas }
}
