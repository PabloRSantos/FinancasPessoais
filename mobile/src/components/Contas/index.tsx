import React from 'react'
import { Transacao } from '../../pages/Home'

import { Container, Item, LeftSide, Icon, Name, RightSide, Value } from './styles'

interface ContasComponentProps {
  items?: Transacao[]
}

const ContasComponent: React.FC<ContasComponentProps> = ({ items }) => {
  if (!items) {
    return <Name>
      Nenhuma transação encontrada
    </Name>
  }

  return (
    <Container>

      {items.map(item => (
        <Item key={item._id}>
          <LeftSide>
            <Icon />
            <Name>
              {item.title} - {item.date}
            </Name>
          </LeftSide>

          <RightSide>
            <Value>
              {item.valor}
            </Value>
          </RightSide>
        </Item>
      ))}
    </Container>

  )
}

export default ContasComponent
