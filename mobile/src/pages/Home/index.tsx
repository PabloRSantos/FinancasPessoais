import React, { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import HeaderComponent from '../../components/Header'
import TransacoesComponent from '../../components/Transacoes'
import GraficosComponent from '../../components/Grafico'

import { Container } from './styles'
import CalendarComponent from '../../components/Calendar'

import queries from './queries'
import { useQuery } from '@apollo/client'
import { useFocusEffect } from '@react-navigation/native'

interface Item {
  key: string;
  // eslint-disable-next-line no-undef
  render: () => JSX.Element;
}

export interface Transacao {
  _id: string,
  categoria: Categoria,
  valor: string,
  title: string,
  date: Date | string,
  isNegative: Boolean
}

export interface Categoria {
  _id: string,
  icon: string,
  name: string
}

export interface User {
  _id: string,
  name: string,
  email: string,
  password: string,
  saldo: number
}

interface Filters {
  isNegative?: boolean,
  date?: Date,
  future?: boolean
}

const Home: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(new Date())
  const [completedTransactions, setCompletedTransactions] = useState<Transacao[]>([])
  const [futureTransactions, setFutureTransactions] = useState<Transacao[]>([])
  const [totalTransactions, setTotalTransactions] = useState<Transacao[]>([])
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [user, setUser] = useState<User>({} as User)
  const [filters, setFilters] = useState<Filters>({})
  const { data, error } = useQuery(queries.query,
    { variables: { filters } })

  if (error) Alert.alert('Erro ao buscar informações no servidor')

  useFocusEffect(useCallback(() => {
    if (!data) return

    if (data.user) { setUser(data.user) }

    if (data.transacoes) { ChangeTransactions(data.transacoes as Transacao[]) }

    setCategorias(data.categorias)
  }, [data]))

  const ChangeTransactions = (transacoes: Transacao[]) => {
    const TransacoesFuturas = transacoes
      .filter((transacao: Transacao) => {
        const transacaoDate = new Date(transacao.date)
        const today = new Date()

        return transacaoDate > today
      })

    const TransacoesCompletadas = transacoes
      .filter((transacao: Transacao) => !TransacoesFuturas.includes(transacao) && transacao)

    const TransacoesTotal = transacoes

    setFutureTransactions(TransacoesFuturas)
    setCompletedTransactions(TransacoesCompletadas)
    setTotalTransactions(TransacoesTotal)
  }

  const onChangeSelect = (item: string) => {
    if (item === 'Saldo') {
      const FiltersObject: Filters = filters

      delete FiltersObject.isNegative

      return setFilters(FiltersObject)
    }

    const selectedItem = item === 'Retiradas'
    setFilters({ ...filters, isNegative: selectedItem })
  }

  const onChangeCalendar = (selectedDate: Date) => {
    if (!selectedDate) return setShowCalendar(false)
    setFilters({ ...filters, date: selectedDate })
    setDate(selectedDate)
    setShowCalendar(false)
  }

  const dataItems: Item[] = [
    {
      key: 'Transacoes Futuras',
      render: () => <TransacoesComponent title='Futuras Transações' items={futureTransactions}/>
    },
    {
      key: 'Graficos',
      render: () => <GraficosComponent transacoes={totalTransactions} categorias={categorias}/>
    },
    {
      key: 'Transacoes',
      render: () => <TransacoesComponent title='Transações Finalizadas' items={completedTransactions}/>
    }
  ]

  return (
    <Container>
      <HeaderComponent
        user={user}
        onChangeSelect={item => onChangeSelect(item)}
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
