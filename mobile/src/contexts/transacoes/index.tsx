import React, { createContext, useContext, useState } from 'react'

import { useMutation } from '@apollo/client'
import queries from './queries'

interface ChangeState {
    title?: string
    valor?: string
    isNegative?: boolean
    categoria?: string
    date?: Date
}

interface Context {
    changeState: (newDatas: ChangeState) => void,
    createTransacao: (title: string, date: Date) => void
}

const TransacoesContext = createContext<Context>({
  changeState: () => { return false },
  createTransacao: () => {}
})

export const TransacaoProvider: React.FC = ({ children }) => {
  const [datas, setDatas] = useState<ChangeState>({} as ChangeState)
  const [createTransacaoMutation] = useMutation(queries.createTransacao)

  const changeState = (newDatas?: ChangeState) => {
    newDatas && setDatas({ ...datas, ...newDatas })
  }

  const createTransacao = async (title: string, date: Date) => {
    const variablesMutation = { ...datas, title, date }
    setDatas(variablesMutation)
    await createTransacaoMutation({
      variables: { data: variablesMutation }
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
