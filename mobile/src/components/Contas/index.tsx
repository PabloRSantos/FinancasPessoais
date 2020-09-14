import React from 'react'

import { Container, LeftSide, Icon, Name, RightSide, Value } from './styles'

const ContasComponent: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Icon />
        <Name>
          Conta de luz
        </Name>
      </LeftSide>

      <RightSide>
        <Value>
          R$0,00
        </Value>
      </RightSide>
    </Container>
  )
}

export default ContasComponent
