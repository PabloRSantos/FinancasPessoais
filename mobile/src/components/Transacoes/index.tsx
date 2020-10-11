import React, { useEffect, useState } from 'react'
import { GetTransacao, Transacao } from '../../pages/Home'
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
  items: GetTransacao
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
    if (!items.transacoes) return

    const itemsFormatted: Transacao[] = items.transacoes.map(item => {
      const dateParts = item.date.toString().split('T').reverse()

      const dateReverse = dateParts[1]
        .split('-')
        .reverse()
        .join('-')
        .replace(/-/g, '/')

      return { ...item, date: dateReverse }
    })

    setItemsState({ ...items, transacoes: itemsFormatted })
  }, [items])

  if (isLoading) {
    return (
      <Container>
        <ShimmerTransacoes/>
        <ShimmerTransacoes/>
        <ShimmerTransacoes/>
        <ShimmerTransacoes/>
      </Container>
    )
  }

  return (
    <Container>
      <Title>
        {title}
      </Title>
      {itemsState.transacoes ? (
        <>
          {itemsState.transacoes.map(item => (
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
        <Name>
          Nenhum item encontrado
        </Name>
      )}

    </Container>

  )
}

export default TransacoesComponent
