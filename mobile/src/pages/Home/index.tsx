import React from 'react'
import { FlatList } from 'react-native'
import HeaderComponent from '../../components/Header'
import TransacoesComponent from '../../components/Transacoes'
import GraficosComponent from '../../components/Grafico'

import { Container, ContainerFlatItems } from './styles'

interface Item {
  key: string;
  // eslint-disable-next-line no-undef
  render: () => JSX.Element;
}

const Home: React.FC = () => {
  const data: Item[] = [
    {
      key: 'Transacoes',
      render: () => (
        <ContainerFlatItems>
          <TransacoesComponent />
          <TransacoesComponent />
          <TransacoesComponent />
        </ContainerFlatItems>
      )
    },
    {
      key: 'Graficos',
      render: () => (
        <ContainerFlatItems>
          <GraficosComponent />
        </ContainerFlatItems>
      )
    }
  ]

  return (
    <Container>
      <HeaderComponent />
      <FlatList
        data= {data}
        renderItem={({ item }) => item.render()}
        keyExtractor={item => item.key}
      />
    </Container>
  )
}

export default Home
