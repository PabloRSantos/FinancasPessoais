import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
    width: 100%;
    height: 100%;
`

export const Item = styled(ShimmerPlaceHolder)`
    width: 100%;
    height: 30px;
    margin: 15px 0;
    border-radius: 8px;
`
