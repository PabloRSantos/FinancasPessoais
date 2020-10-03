import React from 'react'

import { Container, Left, Right } from './styles'

const ShimmerTransacoes: React.FC = () => {
  return (
    <Container>
      <Left visible={false}/>
      <Right visible={false}/>
    </Container>
  )
}

export default ShimmerTransacoes
