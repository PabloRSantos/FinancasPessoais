import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import { useTheme } from '../../contexts/themes'

import queries from './graphql'
import { GetTransacao, Transacao, Filters } from '../Home'
import TransacoesComponent from '../../components/Transacoes'
import { Alert, FlatList } from 'react-native'
import TransacaoDetail from '../../components/TransacaoDetail'

const SeeMore: React.FC = () => {
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [dataModal, setDataModal] = useState<Transacao>({} as Transacao)
  const [filters, setFilters] = useState<Filters>({ page: 1 } as Filters)
  const [items, setItems] = useState<GetTransacao>({} as GetTransacao)
  const { data, loading, error, fetchMore } = useQuery(queries.TransacoesQuery, { variables: { filters } })
  const { switchTheme } = useTheme()

  if (error) {
    Alert.alert('Erro ao se conectar com servidor')
  }

  useEffect(() => {
    switchTheme('blue')
  }, [])

  useEffect(() => {
    if (!items.transacoes) {
      return setItems(data.getTotalTransacoes)
    }
    const totalItems = items.transacoes.concat(data.getTotalTransacoes.transacoes)
    setItems({ pageDatas: data.getTotalTransacoes.pageDatas, transacoes: totalItems })
  }, [data])

  const dataItems = [
    {
      key: 'Transacoes Futuras',
      render: () =>
        <TransacoesComponent
          showDetailTransaction={(item) => showDetailTransaction(item)}
          title='Transações'
          items={items}
          isLoading={loading}/>

    }]

  const fetchDatas = () => {
    fetchMore({ variables: { filters } })
  }

  const showDetailTransaction = (item: Transacao) => {
    setDataModal(item)
    setShowDetailModal(true)
  }

  const handlePage = () => {
    if (data.getTotalTransacoes.pageDatas.pageTotal < filters.page) return

    setFilters({ page: (filters.page + 1) })
  }

  return (
    <Container>
      {showDetailModal && <TransacaoDetail
        dataModal={dataModal}
        handleModal={(action: boolean) => {
          setShowDetailModal(false)
          action && fetchDatas()
        }}/>}

      <FlatList
        data={dataItems}
        renderItem={({ item }) => item.render()}
        keyExtractor={item => item.key}
        onEndReached={handlePage}
        onEndReachedThreshold={0.1}
      />
    </Container>
  )
}

export default SeeMore
