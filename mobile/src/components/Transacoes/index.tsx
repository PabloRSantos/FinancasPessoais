import React from 'react'

import {
  Container,
  LeftSide,
  IconCategoria,
  TextCategoria,
  Name,
  Data,
  RightSide,
  ContentValue,
  Value
} from './styles'

const TransacoesComponent: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <IconCategoria />
        <TextCategoria>
          <Name>
           Lazer -
          </Name>
          <Data>
           12/12/20
          </Data>
        </TextCategoria>
      </LeftSide>

      <RightSide>
        <ContentValue>
          <Value>
          R$0,00
          </Value>
        </ContentValue>
      </RightSide>
    </Container>
  )
}

export default TransacoesComponent
