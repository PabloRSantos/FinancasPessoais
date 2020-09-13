import React from 'react'

import {
  Container,
  Categorias,
  Items,
  Icon,
  Name,
  RightSide,
  Grafico
} from './styles'

const GraficoComponent: React.FC = () => {
  return (
    <Container>
      <Categorias>
        {[1, 2, 3, 4, 5].map(numb => (
          <Items key={numb}>
            <Icon />
            <Name>
            Lazer
            </Name>
          </Items>
        ))}
      </Categorias>

      <RightSide>
        <Grafico />
      </RightSide>
    </Container>
  )
}

export default GraficoComponent
