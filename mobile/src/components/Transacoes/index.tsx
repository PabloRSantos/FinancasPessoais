import React, { useEffect, useState } from 'react'
import { Transacao } from '../../pages/Home'
import ShimmerTransacoes from '../ShimmerEffects/Transacoes'

import {
  Container,
  Item,
  LeftSide,
  BgIconCategoria,
  IconCategoria,
  TextCategoria,
  Name,
  Data,
  RightSide,
  Value,
  Title
} from './styles'

interface TransacoesComponentProps {
  items: Transacao[]
  title: string
  isLoading: boolean
  showDetailTransaction: (item: Transacao) => void
}

const TransacoesComponent: React.FC<TransacoesComponentProps> = ({
  items,
  title,
  isLoading,
  showDetailTransaction
}) => {
  const [itemsState, setItemsState] = useState(items)
  useEffect(() => {
    if (items.length > 0) {
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

  if (items.length === 0 && !isLoading) {
    return (
      <Name>Nenhum item encontrado</Name>
    )
  }

  return (
    <Container>
      <Title>
        {title}
      </Title>
      {!isLoading ? (
        <>
          {itemsState.map(item => (
            <Item key={item._id} onPress={() => showDetailTransaction(item)}>
              <LeftSide>
                <BgIconCategoria>
                  <IconCategoria source={{ uri: item.categoria.icon }}/>
                </BgIconCategoria>
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
        </>
      ) : (
        <>
          <ShimmerTransacoes/>
          <ShimmerTransacoes/>
          <ShimmerTransacoes/>
          <ShimmerTransacoes/>
        </>
      )}

    </Container>

  )
}

export default TransacoesComponent
