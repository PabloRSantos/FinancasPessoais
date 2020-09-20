import React, { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import HeaderComponent from '../../components/Header'
import TransacoesComponent from '../../components/Transacoes'
import GraficosComponent from '../../components/Grafico'
import ContasComponent from '../../components/Contas'

import { Container } from './styles'
import CalendarComponent from '../../components/Calendar'

import queries from './queries'
import { useQuery } from '@apollo/client'

interface Item {
  key: string;
  // eslint-disable-next-line no-undef
  render: () => JSX.Element;
}

export interface Transacao {
  _id: string,
  categoriaId: [string],
  valor: string,
  title: string,
  date: Date,
  isNegative: Boolean
}

export interface User {
  _id: String,
  name: String,
  email: String,
  password: String,
  saldo: number
}

const Home: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(new Date())
  const [completedTransactions, setCompletedTransactions] = useState<Transacao[]>()
  const [futureTransactions, setFutureTransactions] = useState<Transacao[]>()
  const [totalTransactions, setTotalTransactions] = useState<Transacao[]>()
  const [user, setUser] = useState<User>({} as User)
  const [filters, setFilters] = useState({})
  const { data, error } = useQuery(queries.query,
    { variables: { filters } })

  if (error) Alert.alert('Erro ao buscar informações no servidor')

  useEffect(() => {
    if (!data) return

    ChangeUser(data.user as User)

    ChangeTransactions(data.transacoes as Transacao[])
  }, [data])

  const ChangeUser = (user: User) => {
    setUser(user)
  }

  const ChangeTransactions = (transacoes: Transacao[]) => {
    const TransacoesFuturas = transacoes
      .filter((transacao: Transacao) => {
        const transacaoDate = new Date(transacao.date)
        const today = new Date()

        return transacaoDate > today
      })

    const TransacoesTotal = transacoes

    const TransacoesCompletadas = transacoes
      .filter((transacao: Transacao) => !TransacoesFuturas.includes(transacao) && transacao)

    setFutureTransactions(TransacoesFuturas)
    setCompletedTransactions(TransacoesCompletadas)
    setTotalTransactions(TransacoesTotal)
  }

  const onChangeCalendar = (selectedDate: Date) => {
    if (!selectedDate) return setShowCalendar(false)
    setDate(selectedDate)
    setShowCalendar(false)
  }

  const dataItems: Item[] = [
    {
      key: 'Transacoes',
      render: () => <TransacoesComponent items={futureTransactions}/>
    },
    {
      key: 'Graficos',
      render: () => <GraficosComponent items={totalTransactions}/>
    },
    {
      key: 'Contas',
      render: () => <ContasComponent items={completedTransactions}/>
    }
  ]

  return (
    <Container>
      <HeaderComponent
        user={user}
        onPressCalendar={() => setShowCalendar(true)}/>

      {showCalendar &&
        <CalendarComponent
          value={date}
          onChange={(e, date) => onChangeCalendar(date as Date)}/>}

      <FlatList
        data= {dataItems}
        renderItem={({ item }) => item.render()}
        keyExtractor={item => item.key}
      />
    </Container>
  )
}

export default Home
