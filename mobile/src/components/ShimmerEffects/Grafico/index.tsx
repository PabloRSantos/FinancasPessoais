import React from 'react'

import { Container, CategoriasContainer, Grafico, Categorias } from './styles'

const ShimmerGrafico: React.FC = () => {
  return (
    <Container>
      <CategoriasContainer>
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
      </CategoriasContainer>
      <Grafico />
    </Container>
  )
}

export default ShimmerGrafico
