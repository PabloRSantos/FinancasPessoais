import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export const Container = styled(ShimmerPlaceHolder)`
    width: 100%;
    height: 28px;
    margin: 20px 0;
    border-radius: 8px;
`
