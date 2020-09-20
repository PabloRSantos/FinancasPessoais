import React from 'react'
import { FlatList } from 'react-native'
import { Transacao } from '../../pages/Home'

import {
  Container,
  Categorias,
  Items,
  Icon,
  Name,
  RightSide,
  Grafico
} from './styles'

interface GraficoComponentProps {
  items?: Transacao[]
}

const GraficoComponent: React.FC<GraficoComponentProps> = ({ items }) => {
  const renderListItem = (item: Transacao) => (
    <Items>
      <Icon />
      <Name>
        {item.title}
      </Name>
    </Items>
  )

  return (
    <Container>
      <Categorias>
        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => renderListItem(item as Transacao)}
          keyExtractor={(item: Transacao) => item._id}
        />
      </Categorias>

      <RightSide>
        <Grafico />
      </RightSide>
    </Container>
  )
}

export default GraficoComponent
