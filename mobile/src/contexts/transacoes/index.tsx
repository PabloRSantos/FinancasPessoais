import React, { createContext, useContext, useState } from 'react'

import { useMutation } from '@apollo/client'
import queries from './queries'

interface ChangeState {
    title?: string
    valor?: string
    isNegative?: boolean
    isCompleted?: boolean
    categoriaId?: string
}

interface Context {
    changeState: (newDatas: ChangeState) => void,
    createTransacao: () => void
}

const TransacoesContext = createContext<Context>({
  changeState: () => {},
  createTransacao: () => {}
})

export const TransacaoProvider: React.FC = ({ children }) => {
  const [datas, setDatas] = useState<ChangeState>()
  const [createTransacaoMutation] = useMutation(queries.createTransacao)

  const changeState = (newDatas: ChangeState) => {
    if (newDatas.title) { setDatas({ ...datas, title: newDatas.title }) }

    if (newDatas.valor) { setDatas({ ...datas, valor: newDatas.valor }) }

    if (newDatas.isCompleted) { setDatas({ ...datas, isCompleted: newDatas.isCompleted }) }

    if (newDatas.isNegative) { setDatas({ ...datas, isNegative: newDatas.isNegative }) }

    if (newDatas.categoriaId) { setDatas({ ...datas, categoriaId: newDatas.categoriaId }) }
  }

  const createTransacao = async () => {
    const { data } = await createTransacaoMutation({
      variables: {
        title: 'Comprei algo',
        valor: datas?.valor,
        isCompleted: datas?.isCompleted,
        isNegative: datas?.isNegative,
        categoriaId: datas?.categoriaId
      }
    })

    console.log(datas)

    console.log(data.createTransacao)
  }

  return (
    <TransacoesContext.Provider value={{ createTransacao, changeState }}>
      {children}
    </TransacoesContext.Provider>
  )
}

export function useTransacao () {
  const context = useContext(TransacoesContext)

  return context
}
