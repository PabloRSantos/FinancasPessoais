import React from 'react'
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
  ContentValue,
  Value
} from './styles'

interface TransacoesComponentProps {
  items?: Transacao[]
}

const TransacoesComponent: React.FC<TransacoesComponentProps> = ({ items }) => {
  if (!items) {
    return (
      <Name>Nenhum item encontrado</Name>
    )
  }

  return (
    <Container>
      {items.map(item => (
        <Item key={item._id}>
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
            <ContentValue>
              <Value>
                {item.valor}
              </Value>
            </ContentValue>
          </RightSide>
        </Item>
      ))}
    </Container>

  )
}

export default TransacoesComponent
