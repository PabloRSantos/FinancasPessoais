import React, { useEffect, useState } from 'react'
import { Transacao } from '../../pages/Home'

import {
  Container,
  Item,
  LeftSide,
  IconCategoria,
  TextCategoria,
  Name,
  Data,
  RightSide,
  Value,
  Title
} from './styles'

interface TransacoesComponentProps {
  items?: Transacao[]
  title: string
  showDetailTransaction: (item: Transacao) => void
}

const TransacoesComponent: React.FC<TransacoesComponentProps> = ({ items, title, showDetailTransaction }) => {
  const [itemsState, setItemsState] = useState(items)

  useEffect(() => {
    if (items) {
      const itemsFormatted = items.map(item => {
        const dateParts = item.date.toString().split('T').reverse()

        const date = dateParts[1]
          .split('-')
          .reverse()
          .join('-')
          .replace(/-/g, '/')

        return { ...item, date }
      })

      setItemsState(itemsFormatted as Transacao[])
    }
  }, [items])

  if (!itemsState) {
    return (
      <Name>Nenhum item encontrado</Name>
    )
  }

  return (
    <Container>
      <Title>
        {title}
      </Title>
      {itemsState.map(item => (
        <Item key={item._id} onPress={() => showDetailTransaction(item)}>
          <LeftSide>
            <IconCategoria />
            <TextCategoria>
              <Name>
                {item.title} - {' '}
              </Name>
              <Data>
                {item.date}
              </Data>
            </TextCategoria>
          </LeftSide>

          <RightSide>
            <Value isNegative={item.isNegative}>
              R${item.valor}
            </Value>
          </RightSide>
        </Item>
      ))}
    </Container>

  )
}

export default TransacoesComponent
