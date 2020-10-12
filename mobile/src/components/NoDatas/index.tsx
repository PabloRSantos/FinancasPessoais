import React from 'react'

import { Container, Icon, Title, Span, ArrowBody, Arrow } from './styles'

const NoDatas: React.FC = () => {
  return (
    <Container>
      <Icon />
      <Title>
        Nenhum dado encontrado
      </Title>

      <Span>
        Adicione uma transação, basta clicar aqui
      </Span>

      <ArrowBody />
      <Arrow />
    </Container>
  )
}

export default NoDatas
