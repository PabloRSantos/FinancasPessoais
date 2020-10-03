import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const widthWindow = Dimensions.get('window').width

export const Container = styled.View`
    margin: 10px 0;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const Title = styled(ShimmerPlaceHolder).attrs({
  height: 25,
  width: 300
})`
      margin: 0 auto;
      border-radius: 8px;
  `

export const Left = styled(ShimmerPlaceHolder).attrs({
  height: 25,
  width: (widthWindow * 0.6)
})`
      border-radius: 8px;
  `

export const Right = styled(ShimmerPlaceHolder).attrs({
  height: 25,
  width: 40
})`
      border-radius: 8px;
  `
