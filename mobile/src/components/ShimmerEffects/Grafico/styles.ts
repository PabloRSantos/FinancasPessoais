import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const CategoriasContainer = styled.View`
`

export const Grafico = styled(ShimmerPlaceHolder).attrs({
  width: 200,
  height: 200
})`
      border-radius: 100px;
  `

export const Categorias = styled(ShimmerPlaceHolder).attrs({
  width: 80
})`
    margin: 10px 0;
`
