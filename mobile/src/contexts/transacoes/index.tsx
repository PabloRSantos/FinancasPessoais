import React, { createContext, useContext, useState } from 'react'

import { useMutation } from '@apollo/client'
import queries from './queries'

interface ChangeState {
    title?: string
    valor?: string
    isNegative?: boolean
    categoriaId?: string[]
    date?: Date
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
  const [datas, setDatas] = useState<ChangeState>({} as ChangeState)
  const [createTransacaoMutation] = useMutation(queries.createTransacao)

  const changeState = (newDatas?: ChangeState) => {
    newDatas && setDatas({ ...datas, ...newDatas })
  }

  const createTransacao = async () => {
    await createTransacaoMutation({
      variables: { data: datas }
    })
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
