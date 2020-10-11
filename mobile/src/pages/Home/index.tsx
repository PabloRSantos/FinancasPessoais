import React, { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import { useTheme } from '../../contexts/themes'

import HeaderComponent from '../../components/Header'
import TransacaoDetail from '../../components/TransacaoDetail'
import FilterModal from '../../components/Modal'
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

export interface GetTransacao {
  transacoes: Transacao[]
  pageDatas: PageDatas
}

export interface Transacao {
  _id: string,
  categoria: Categoria,
  valor: string,
  title: string,
  date: Date | string,
  isNegative: Boolean
}

interface PageDatas {
  pageAtual: number,
  pageTotal: number
}

export interface Categoria {
  _id: string,
  icon: string,
  name: string
}

export interface GetCategoria {
  categorias: Categoria[]
  pageDatas: PageDatas
 }

export interface User {
  _id: string,
  name: string,
  email: string,
  password: string,
  saldo: number
}

interface Filters {
  page: number,
  isNegative?: boolean,
  date?: Date,
  future?: boolean
}

const Home: React.FC = () => {
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [dataModal, setDataModal] = useState<Transacao>({} as Transacao)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(new Date())
  const [select, setSelect] = useState('')
  const [completedTransactions, setCompletedTransactions] = useState<GetTransacao>({} as GetTransacao)
  const [futureTransactions, setFutureTransactions] = useState<GetTransacao>({} as GetTransacao)
  const [totalTransactions, setTotalTransactions] = useState<GetTransacao>({} as GetTransacao)
  const [categorias, setCategorias] = useState<GetCategoria>({} as GetCategoria)
  const [categoriasPage, setCategoriasPage] = useState(1)
  const [userSaldoNegative, setUserSaldoNegative] = useState<Boolean | undefined>()
  const [user, setUser] = useState<User>({} as User)
  const [filters, setFilters] = useState<Filters>({ page: 1 })

  const { data, error, loading, fetchMore } = useQuery(queries.query,
    { variables: { filters, categoriasPage, isNegative: userSaldoNegative } })

  const { switchTheme } = useTheme()

  if (error) Alert.alert('Erro ao buscar dados no servidor, tente novamente mais tarde')

  useFocusEffect(useCallback(() => {
    switchTheme('blue')
    onChangeSelect('Saldo')
  }, []))

  useEffect(() => {
    if (!data) return

    data.getUser && setUser(data.getUser)

    data.getCategorias && setCategorias(data.getCategorias)

    data.getTotalTransacoes && setTotalTransactions(data.getTotalTransacoes)
    data.getFuturasTransacoes && setFutureTransactions(data.getFuturasTransacoes)
    data.getTransacoesFinalizadas && setCompletedTransactions(data.getTransacoesFinalizadas)
  }, [data])

  const fetchDatas = () => {
    if (!fetchMore) return
    fetchMore({ variables: { filters } })
  }

  const onChangeSelect = (item: string) => {
    setSelect(item)

    if (item === 'Saldo') {
      const FiltersObject: Filters = filters

      delete FiltersObject.isNegative

      setUserSaldoNegative(undefined)
      return setFilters(FiltersObject)
    }

    const selectedItem = item === 'Retiradas'
    setFilters({ ...filters, isNegative: selectedItem })
    setUserSaldoNegative(selectedItem)
  }

  const onChangeCalendar = (selectedDate: Date) => {
    if (!selectedDate) return setShowCalendar(false)
    setFilters({ ...filters, date: selectedDate })
    setDate(selectedDate)
    setShowCalendar(false)
  }

  const showDetailTransaction = (item: Transacao) => {
    setDataModal(item)
    setShowDetailModal(true)
  }

  const dataItems: Item[] = [
    {
      key: 'Transacoes Futuras',
      render: () =>
        <TransacoesComponent
          showDetailTransaction={(item) => showDetailTransaction(item)}
          title='Futuras Transações'
          items={futureTransactions}
          isLoading={loading}/>

    },
    {
      key: 'Graficos',
      render: () =>
        <GraficosComponent transacoes={totalTransactions}
          categorias={categorias}
          isLoading={loading}/>
    },
    {
      key: 'Transacoes',
      render: () =>
        <TransacoesComponent
          showDetailTransaction={(item) => showDetailTransaction(item)}
          title='Transações Finalizadas'
          items={completedTransactions}
          isLoading={loading}/>
    }
  ]

  return (
    <Container>
      <HeaderComponent
        isLoading={loading}
        user={user}
        selectInitial={select}
        onChangeSelect={item => onChangeSelect(item)}
        onPressCalendar={() => setShowCalendar(true)}
        onPressFilter={() => setShowFilterModal(true)}/>

      {showCalendar &&
        <CalendarComponent
          value={date}
          onChange={(e, date) => onChangeCalendar(date as Date)}/>}

      {showFilterModal &&
        <FilterModal onPress={() => setShowFilterModal(false)}/>
      }

      {showDetailModal && <TransacaoDetail
        dataModal={dataModal}
        handleModal={(action: boolean) => {
          setShowDetailModal(false)
          action && fetchDatas()
        }}/>}

      <FlatList
        onRefresh={fetchDatas}
        refreshing={false}
        data={dataItems}
        renderItem={({ item }) => item.render()}
        keyExtractor={item => item.key}
      />
    </Container>
  )
}

export default Home
